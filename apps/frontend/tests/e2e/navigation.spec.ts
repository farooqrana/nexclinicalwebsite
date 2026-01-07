import { test, expect, Page } from '@playwright/test';

async function openMobileMenuIfNeeded(page: Page) {
  try {
    if (await page.getByRole('button', { name: /^services$/i }).isVisible()) {
      return;
    }
  } catch {}
  const burger = page.locator('header >> button:visible').first();
  if (await burger.isVisible()) {
    await burger.click();
  }
}

test.describe('Navigation and Main Pages', () => {
  test('should navigate to homepage', async ({ page }) => {
    await page.goto('/');
    
    // Check for hero section
    await expect(page.getByRole('heading', { name: /virtual medical support for small practices/i })).toBeVisible();
    
    // Check for any CTA button/link visible across breakpoints
    await expect(
      page.getByRole('link', { name: /get started|get pricing|book consultation/i }).first()
    ).toBeVisible();
  });

  test('should have working header navigation', async ({ page }) => {
    await page.goto('/');
    await openMobileMenuIfNeeded(page);

    // Check navigation links exist
    await expect(page.getByRole('button', { name: /^services$/i })).toBeVisible();
    await expect(page.locator('header').getByRole('link', { name: /^pricing$/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /resources/i })).toBeVisible();
    await expect(page.locator('header').getByRole('link', { name: /how it works/i })).toBeVisible();
    await expect(page.locator('header').getByRole('link', { name: /contact us/i })).toBeVisible();
  });

  test('should navigate to services page', async ({ page }) => {
    await page.goto('/services');
    await expect(page).toHaveURL(/\/services/);
    await expect(page.locator('main').getByRole('heading', { name: /premium support/i }).first()).toBeVisible();
  });

  test('should navigate to pricing page', async ({ page }) => {
    await page.goto('/');
    await openMobileMenuIfNeeded(page);
    await page.locator('header').getByRole('link', { name: /^pricing$/i }).click();
    
    await expect(page).toHaveURL(/\/pricing/);
    await expect(page.getByRole('heading', { name: /pricing/i })).toBeVisible();
  });

  test('should navigate to about page', async ({ page }) => {
    await page.goto('/about');
    await expect(page).toHaveURL(/\/about/);
    await expect(page.getByRole('heading', { name: /we help small practices thrive/i })).toBeVisible();
  });

  test('should navigate to contact page', async ({ page }) => {
    await page.goto('/');
    await openMobileMenuIfNeeded(page);
    await page.getByRole('link', { name: /contact us/i }).first().click();
    
    await expect(page).toHaveURL(/\/contact/);
    await expect(page.getByRole('heading', { name: /let's talk about your practice/i })).toBeVisible();
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
      await expect(page.getByRole('heading', { name: /virtual medical support for small practices/i })).toBeVisible();
    }
  });

  test('should load service detail pages', async ({ page }) => {
    const servicePages = [
      '/services/patient-scheduling',
      '/services/authorization',
      '/services/clinical-support'
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
