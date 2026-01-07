import { test, expect } from '@playwright/test';

test.describe('Error Pages', () => {
  test('should show custom 404 page for non-existent routes', async ({ page }) => {
    // Navigate to non-existent page
    await page.goto('/this-page-does-not-exist');
    
    // Should show 404 content
    await expect(page.getByRole('heading', { name: '404' })).toBeVisible();
    await expect(page.getByText('Page Not Found')).toBeVisible();
    
    // Should have a way to go home
    await expect(page.getByRole('link', { name: /go home|back to home/i })).toBeVisible();
    
    // Should have helpful links
    await expect(page.locator('main').getByRole('link', { name: /contact support/i })).toBeVisible();
  });

  test('should navigate back from 404 page', async ({ page }) => {
    await page.goto('/non-existent-page');
    
    // Click "Go Home" button
    await page.getByRole('link', { name: /go home|back to home/i }).first().click();
    
    // Should be on homepage
    await expect(page).toHaveURL('/');
    await expect(page.getByRole('heading', { name: /virtual medical support for small practices/i })).toBeVisible();
  });

  test('404 page should have proper styling', async ({ page }) => {
    await page.goto('/non-existent-page');
    
    // Check that page has content and is styled
    const body = await page.locator('body');
    const backgroundColor = await body.evaluate((el) => getComputedStyle(el).backgroundColor);
    expect(backgroundColor).toBeTruthy();
    
    // Should have NexClinical branding
    await expect(page.locator('footer').getByRole('img', { name: /nexclinical/i })).toBeVisible();
  });

  test('404 page should be responsive', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/mobile-404-test');
    
    // Should show 404 content on mobile
    await expect(page.getByRole('heading', { name: '404' })).toBeVisible();
    await expect(page.getByText('Page Not Found')).toBeVisible();
    await expect(page.getByRole('link', { name: /go home/i })).toBeVisible();
  });
});

test.describe('SEO and Performance', () => {
  test('should have valid sitemap', async ({ page }) => {
    const response = await page.goto('/sitemap.xml');
    
    // Should return 200 OK
    expect(response?.status()).toBe(200);
    
    // Should be XML content
    const contentType = response?.headers()['content-type'];
    expect(contentType).toContain('xml');
    
    // Should have URL entries
    const content = await response?.text();
    expect(content).toContain('<urlset');
    expect(content).toContain('<url>');
    expect(content).toContain('<loc>');
  });

  test('should have robots.txt', async ({ page }) => {
    const response = await page.goto('/robots.txt');
    
    // Should return 200 OK
    expect(response?.status()).toBe(200);
    
    // Should have User-agent and Sitemap
    const content = await response?.text();
    expect(content).toContain('User-agent');
    expect(content).toContain('Sitemap');
  });

  test('should have structured data on homepage', async ({ page }) => {
    await page.goto('/');
    
    // Check for JSON-LD structured data
    const structuredData = await page.locator('script[type="application/ld+json"]').count();
    expect(structuredData).toBeGreaterThan(0);
    
    // Validate JSON-LD content
    const jsonLd = await page.locator('script[type="application/ld+json"]').first().textContent();
    expect(jsonLd).toBeTruthy();
    
    const data = JSON.parse(jsonLd!);
    expect(data['@type']).toBeTruthy();
  });

  test('should load homepage quickly', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - startTime;
    
    // Should load in under 5 seconds (allowing for network/cold start)
    expect(loadTime).toBeLessThan(5000);
  });

  test('should have no console errors on homepage', async ({ page }) => {
    const consoleErrors: string[] = [];
    
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    
    await page.goto('/');
    
    // Should have no console errors (excluding known third-party warnings)
    const criticalErrors = consoleErrors.filter(
      error => !error.includes('favicon') && !error.includes('third-party')
    );
    expect(criticalErrors.length).toBe(0);
  });
});

test.describe('Accessibility', () => {
  test('should have proper heading hierarchy', async ({ page }) => {
    await page.goto('/');
    
    // Should have exactly one h1
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1);
    
    // Should have h2 elements
    const h2Count = await page.locator('h2').count();
    expect(h2Count).toBeGreaterThan(0);
  });

  test('should have alt text for images', async ({ page }) => {
    await page.goto('/');
    
    // Get all images
    const images = await page.locator('img').all();
    
    for (const img of images) {
      // Each image should have alt attribute (can be empty for decorative images)
      const alt = await img.getAttribute('alt');
      expect(alt).not.toBeNull();
    }
  });

  test('should have proper form labels', async ({ page }) => {
    await page.goto('/contact');
    
    // All inputs should have labels
    const inputs = await page.locator('input[type="text"], input[type="email"], input[type="tel"], textarea').all();
    
    for (const input of inputs) {
      const id = await input.getAttribute('id');
      if (id) {
        const label = await page.locator(`label[for="${id}"]`).count();
        expect(label).toBeGreaterThan(0);
      }
    }
  });

  test('should support keyboard navigation', async ({ page }) => {
    await page.goto('/');
    
    // Tab through elements
    await page.keyboard.press('Tab');
    
    // First focusable element should be focused
    const focused = await page.evaluate(() => document.activeElement?.tagName);
    expect(focused).toBeTruthy();
  });
});
