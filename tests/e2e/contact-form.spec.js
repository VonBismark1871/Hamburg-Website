import { test, expect } from '@playwright/test';

/**
 * The contact form is the only lead channel on the site. Netlify only picks a form up
 * when the markup contract is intact, and a broken contract fails silently: the page
 * still submits, the visitor still sees the thank-you page, but no lead ever arrives.
 * These tests guard that contract.
 */
test.describe('contact form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/kontakt');
  });

  test('keeps the Netlify submission contract intact', async ({ page }) => {
    const form = page.locator('form[name="contact"]');

    await expect(form).toHaveAttribute('data-netlify', 'true');
    await expect(form).toHaveAttribute('action', '/thank-you');
    await expect(form.locator('input[name="form-name"]')).toHaveValue('contact');
    await expect(form).toHaveAttribute('data-netlify-honeypot', 'bot-field');
  });

  test('hides the honeypot field from real visitors', async ({ page }) => {
    const honeypot = page.locator('input[name="bot-field"]');

    await expect(honeypot).toHaveAttribute('tabindex', '-1');
    await expect(honeypot).not.toBeInViewport();
  });

  test('blocks submission when required fields are empty', async ({ page }) => {
    await page.getByRole('button', { name: /senden|absenden|anfrage/i }).click();

    await expect(page).toHaveURL(/\/kontakt/);

    const nameField = page.locator('input[name="name"]');
    const isValid = await nameField.evaluate((el) => el.checkValidity());
    expect(isValid, 'empty required name field must fail validation').toBe(false);
  });

  test('rejects a malformed email address', async ({ page }) => {
    await page.locator('input[name="name"]').fill('Max Mustermann');
    await page.locator('input[name="email"]').fill('not-an-email');

    const emailField = page.locator('input[name="email"]');
    const isValid = await emailField.evaluate((el) => el.checkValidity());
    expect(isValid, 'malformed email must fail validation').toBe(false);
  });

  test('accepts a fully valid submission', async ({ page }) => {
    await page.locator('input[name="name"]').fill('Max Mustermann');
    await page.locator('input[name="email"]').fill('max@example.de');
    await page.locator('textarea[name="message"]').fill('Ich brauche eine neue Website.');

    const form = page.locator('form[name="contact"]');
    const isValid = await form.evaluate((el) => el.checkValidity());
    expect(isValid, 'a complete form must pass validation').toBe(true);
  });

  test('every field is reachable by its label', async ({ page }) => {
    const labelledFields = ['name', 'email', 'business', 'website', 'branche', 'message'];

    for (const field of labelledFields) {
      const input = page.locator(`[name="${field}"]`);
      const id = await input.getAttribute('id');
      expect(id, `${field} needs an id to be labelled`).toBeTruthy();
      await expect(page.locator(`label[for="${id}"]`)).toHaveCount(1);
    }
  });
});
