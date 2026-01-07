import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('should display contact form with all fields', async ({ page }) => {
    // Check page title and heading
    await expect(page).toHaveTitle(/Contact.*NexClinical/i);
    await expect(page.locator('h1')).toContainText(/contact/i);

    // Check all form fields exist
    await expect(page.getByLabel(/first name/i)).toBeVisible();
    await expect(page.getByLabel(/last name/i)).toBeVisible();
    await expect(page.getByLabel(/email/i)).toBeVisible();
    await expect(page.getByLabel(/phone/i)).toBeVisible();
    await expect(page.getByLabel(/practice name/i)).toBeVisible();
    await expect(page.getByLabel(/practice type/i)).toBeVisible();
    await expect(page.getByLabel(/number of providers/i)).toBeVisible();
    
    // Check service checkboxes
    await expect(page.getByLabel(/revenue cycle management/i)).toBeVisible();
    await expect(page.getByLabel(/medical billing/i)).toBeVisible();
    await expect(page.getByLabel(/credentialing/i)).toBeVisible();
    
    // Check message field and submit button
    await expect(page.getByLabel(/message/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /send message/i })).toBeVisible();
  });

  test('should show validation error when submitting empty form', async ({ page }) => {
    // Click submit without filling form
    await page.getByRole('button', { name: /send message/i }).click();

    // Should show HTML5 validation (browser native)
    const firstNameInput = page.getByLabel(/first name/i);
    const validationMessage = await firstNameInput.evaluate((el: HTMLInputElement) => el.validationMessage);
    expect(validationMessage).toBeTruthy();
  });

  test('should show error when no service selected', async ({ page }) => {
    // Fill all required fields except service selection
    await page.getByLabel(/first name/i).fill('John');
    await page.getByLabel(/last name/i).fill('Doe');
    await page.getByLabel(/email/i).fill('john@example.com');
    await page.getByLabel(/phone/i).fill('555-1234');
    await page.getByLabel(/practice name/i).fill('Test Practice');
    await page.getByLabel(/practice type/i).fill('Primary Care');
    await page.getByLabel(/number of providers/i).fill('5');
    await page.getByLabel(/message/i).fill('Test message');

    // Submit without selecting services
    await page.getByRole('button', { name: /send message/i }).click();

    // Should show error message
    await expect(page.getByText(/please select at least one service/i)).toBeVisible();
  });

  test('should submit form successfully with valid data', async ({ page }) => {
    // Fill all fields
    await page.getByLabel(/first name/i).fill('John');
    await page.getByLabel(/last name/i).fill('Doe');
    await page.getByLabel(/email/i).fill('john@example.com');
    await page.getByLabel(/phone/i).fill('555-1234');
    await page.getByLabel(/practice name/i).fill('Test Practice');
    await page.getByLabel(/practice type/i).fill('Primary Care');
    await page.getByLabel(/number of providers/i).fill('5');
    
    // Select at least one service
    await page.getByLabel(/revenue cycle management/i).check();
    await page.getByLabel(/medical billing/i).check();
    
    await page.getByLabel(/message/i).fill('This is a test message for the contact form.');

    // Submit form
    await page.getByRole('button', { name: /send message/i }).click();

    // Should show success message
    await expect(page.getByText(/thank you.*message.*sent successfully/i)).toBeVisible({ timeout: 10000 });

    // Form should reset after successful submission
    await expect(page.getByLabel(/first name/i)).toHaveValue('');
  });

  test('should enforce rate limiting after multiple submissions', async ({ page }) => {
    // Fill valid form data
    const fillForm = async () => {
      await page.getByLabel(/first name/i).fill('John');
      await page.getByLabel(/last name/i).fill('Doe');
      await page.getByLabel(/email/i).fill('john@example.com');
      await page.getByLabel(/phone/i).fill('555-1234');
      await page.getByLabel(/practice name/i).fill('Test Practice');
      await page.getByLabel(/practice type/i).fill('Primary Care');
      await page.getByLabel(/number of providers/i).fill('5');
      await page.getByLabel(/revenue cycle management/i).check();
      await page.getByLabel(/message/i).fill('Test message');
    };

    // Submit form 5 times (rate limit is 5 per hour)
    for (let i = 0; i < 5; i++) {
      await fillForm();
      await page.getByRole('button', { name: /send message/i }).click();
      await page.waitForTimeout(1000); // Wait between submissions
      
      // For first 5, should succeed
      await expect(page.getByText(/thank you.*message.*sent successfully/i)).toBeVisible({ timeout: 10000 });
      await page.waitForTimeout(500);
    }

    // 6th submission should be rate limited
    await fillForm();
    await page.getByRole('button', { name: /send message/i }).click();
    
    // Should show rate limit error
    await expect(page.getByText(/too many requests|rate limit/i)).toBeVisible({ timeout: 10000 });
  });

  test('should validate email format', async ({ page }) => {
    // Fill form with invalid email
    await page.getByLabel(/first name/i).fill('John');
    await page.getByLabel(/last name/i).fill('Doe');
    await page.getByLabel(/email/i).fill('invalid-email');
    
    // Click submit
    await page.getByRole('button', { name: /send message/i }).click();

    // Should show HTML5 email validation
    const emailInput = page.getByLabel(/email/i);
    const validationMessage = await emailInput.evaluate((el: HTMLInputElement) => el.validationMessage);
    expect(validationMessage).toContain('email');
  });

  test('should be responsive on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/contact');

    // Form should be visible and usable
    await expect(page.getByLabel(/first name/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /send message/i })).toBeVisible();

    // Should be able to fill and submit
    await page.getByLabel(/first name/i).fill('Mobile');
    await page.getByLabel(/last name/i).fill('User');
    expect(await page.getByLabel(/first name/i).inputValue()).toBe('Mobile');
  });
});
