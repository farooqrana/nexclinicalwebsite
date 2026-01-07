import { test, expect } from '@playwright/test';

test.describe('Navigation and Main Pages', () => {
  test('should navigate to homepage', async ({ page }) => {
    await page.goto('/');
    
    // Check for hero section
    await expect(page.getByRole('heading', { name: /transforming healthcare billing/i })).toBeVisible();
    
    // Check for CTA buttons
    await expect(page.getByRole('link', { name: /get started/i })).toBeVisible();
  });

  test('should have working header navigation', async ({ page }) => {
    await page.goto('/');

    // Check navigation links exist
    await expect(page.getByRole('link', { name: /^home$/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /services/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /pricing/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /about/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /contact/i })).toBeVisible();
  });

  test('should navigate to services page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /services/i }).first().click();
    
    await expect(page).toHaveURL(/\/services/);
    await expect(page.getByRole('heading', { name: /our services/i })).toBeVisible();
  });

  test('should navigate to pricing page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /pricing/i }).first().click();
    
    await expect(page).toHaveURL(/\/pricing/);
    await expect(page.getByRole('heading', { name: /pricing/i })).toBeVisible();
  });

  test('should navigate to about page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /about/i }).first().click();
    
    await expect(page).toHaveURL(/\/about/);
    await expect(page.getByRole('heading', { name: /about/i })).toBeVisible();
  });

  test('should navigate to contact page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /contact/i }).first().click();
    
    await expect(page).toHaveURL(/\/contact/);
    await expect(page.getByRole('heading', { name: /contact/i })).toBeVisible();
  });

  test('should navigate to FAQs page', async ({ page }) => {
    await page.goto('/faqs');
    
    await expect(page.getByRole('heading', { name: /frequently asked questions|faq/i })).toBeVisible();
  });

  test('should navigate to how it works page', async ({ page }) => {
    await page.goto('/how-it-works');
    
    await expect(page.getByRole('heading', { name: /how it works/i })).toBeVisible();
  });

  test('should have working footer links', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    // Check footer sections exist
    await expect(page.locator('footer')).toBeVisible();
  });

  test('should display logo and brand', async ({ page }) => {
    await page.goto('/');
    
    // Check for logo/brand name
    await expect(page.getByText(/nexclinical/i).first()).toBeVisible();
  });

  test('should have proper meta tags for SEO', async ({ page }) => {
    await page.goto('/');
    
    // Check for essential meta tags
    const title = await page.title();
    expect(title).toBeTruthy();
    expect(title.length).toBeGreaterThan(0);
    
    // Check for meta description
    const metaDescription = await page.locator('meta[name="description"]').getAttribute('content');
    expect(metaDescription).toBeTruthy();
  });

  test('should be responsive on different screen sizes', async ({ page }) => {
    const viewports = [
      { width: 375, height: 667, name: 'Mobile' },
      { width: 768, height: 1024, name: 'Tablet' },
      { width: 1920, height: 1080, name: 'Desktop' }
    ];

    for (const viewport of viewports) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto('/');
      
      // Check that main content is visible
      await expect(page.getByRole('heading', { name: /transforming healthcare billing/i })).toBeVisible();
    }
  });

  test('should load service detail pages', async ({ page }) => {
    const servicePages = [
      '/services/revenue-cycle-management',
      '/services/medical-billing',
      '/services/credentialing',
      '/services/practice-management'
    ];

    for (const servicePage of servicePages) {
      await page.goto(servicePage);
      
      // Should have a heading
      const headings = await page.locator('h1').count();
      expect(headings).toBeGreaterThan(0);
      
      // Should have content
      const content = await page.textContent('body');
      expect(content?.length).toBeGreaterThan(100);
    }
  });
});
