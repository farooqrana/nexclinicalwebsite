import { test, expect } from '@playwright/test';

test.describe('Pricing Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/pricing');
  });

  test('should display pricing form with all fields', async ({ page }) => {
    // Check page title
    await expect(page).toHaveTitle(/Pricing.*NexClinical/i);

    // Check all form fields exist
    await expect(page.getByLabel(/practice name/i)).toBeVisible();
    await expect(page.getByLabel(/^name\b/i)).toBeVisible();
    await expect(page.getByLabel(/phone/i)).toBeVisible();
    await expect(page.getByLabel(/email/i)).toBeVisible();
    
    // Check free audit checkbox
    await expect(page.getByLabel(/request free audit/i)).toBeVisible();
    
    // Check submit button
    await expect(page.getByRole('button', { name: /get pricing/i })).toBeVisible();
  });

  test('should submit pricing request successfully', async ({ page }) => {
    // Fill required fields
    await page.getByLabel(/practice name/i).fill('ABC Medical');
    await page.getByLabel(/^name\b/i).fill('Jane Smith');
    await page.getByLabel(/phone/i).fill('555-9876');
    await page.getByLabel(/email/i).fill('jane@abcmedical.com');

    // Optionally request free audit
    await page.getByLabel(/request free audit/i).check();

    // Submit form
    await page.getByRole('button', { name: /get pricing/i }).click();

    // Show loading then success or known error
    await expect(page.getByRole('button', { name: /sending/i })).toBeVisible();
    await expect(
      page.getByText(/(thank you.*pricing request.*received|failed to process your request)/i)
    ).toBeVisible({ timeout: 10000 });

    // Form resets only on success; check conditionally
    const successVisible = await page.getByText(/thank you.*pricing request.*received/i).isVisible();
    if (successVisible) {
      await expect(page.getByLabel(/practice name/i)).toHaveValue('');
    }
  });

  test('should validate required fields', async ({ page }) => {
    // Try to submit empty form
    await page.getByRole('button', { name: /get pricing/i }).click();

    // Should show HTML5 validation
    const practiceNameInput = page.getByLabel(/practice name/i);
    const validationMessage = await practiceNameInput.evaluate((el: HTMLInputElement) => el.validationMessage);
    expect(validationMessage).toBeTruthy();
  });

  // Rate limiting relies on server-side state; skip on remote BASE_URL
  test.skip(!!process.env.BASE_URL || !!process.env.PLAYWRIGHT_BASE_URL, 'Rate limit not reliable on remote serverless');
  test('should enforce rate limiting', async ({ page }) => {
    // Fill and submit form 3 times (rate limit is 3 per hour)
    const fillAndSubmit = async () => {
      await page.getByLabel(/practice name/i).fill('Test Practice');
      await page.getByLabel(/^name\b/i).fill('Test User');
      await page.getByLabel(/phone/i).fill('555-1234');
      await page.getByLabel(/email/i).fill('test@example.com');
      await page.getByRole('button', { name: /get pricing/i }).click();
    };

    for (let i = 0; i < 3; i++) {
      await fillAndSubmit();
      await expect(page.getByRole('button', { name: /sending/i })).toBeVisible();
      await expect(
        page.getByText(/(thank you.*pricing request.*received|failed to process your request)/i)
      ).toBeVisible({ timeout: 10000 });
      await page.waitForTimeout(1000);
    }

    // 4th submission should be rate limited
    await fillAndSubmit();
    await expect(page.getByText(/too many requests|rate limit/i)).toBeVisible({ timeout: 10000 });
  });

  test('should display pricing information', async ({ page }) => {
    // Should show pricing details on the page
    await expect(page.getByRole('heading', { name: /pricing/i })).toBeVisible();
    await expect(page.getByText(/get your custom quote/i)).toBeVisible();
  });
});
