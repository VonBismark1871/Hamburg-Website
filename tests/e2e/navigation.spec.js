import { test, expect } from '@playwright/test';

const pages = [
  { path: '/', heading: /Websites/i },
  { path: '/preise', heading: /Preise|Pakete/i },
  { path: '/referenzen', heading: /Referenz/i },
  { path: '/ablauf', heading: /Ablauf/i },
  { path: '/ueber-uns', heading: /Ansprechpartner|Über/i },
  { path: '/kontakt', heading: /Kontakt/i },
  { path: '/faq', heading: /Fragen|FAQ/i },
  { path: '/impressum', heading: /Impressum/i },
  { path: '/datenschutz', heading: /Datenschutz/i },
  { path: '/agb', heading: /AGB|Geschäftsbedingungen/i }
];

test.describe('page availability', () => {
  for (const { path, heading } of pages) {
    test(`${path} responds 200 and renders its heading`, async ({ page }) => {
      const response = await page.goto(path);

      expect(response?.status(), `${path} should return 200`).toBe(200);
      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.locator('h1')).toContainText(heading);
    });
  }
});

test.describe('header navigation', () => {
  test('primary nav links reach their target pages', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name === 'mobile-chromium', 'desktop nav is collapsed on mobile');

    await page.goto('/');

    const nav = page.getByRole('navigation').first();
    await nav.getByRole('link', { name: /Preise/i }).first().click();
    await expect(page).toHaveURL(/\/preise/);

    await nav.getByRole('link', { name: /Kontakt/i }).first().click();
    await expect(page).toHaveURL(/\/kontakt/);
  });

  test('logo returns to the homepage', async ({ page }) => {
    await page.goto('/impressum');
    await page.getByRole('link', { name: /Hamburg Websites/i }).first().click();
    await expect(page).toHaveURL(/\/$/);
  });
});

test.describe('no broken internal links', () => {
  test('every internal link on the homepage resolves', async ({ page, request }) => {
    await page.goto('/');

    const hrefs = await page.locator('a[href^="/"]').evaluateAll((anchors) =>
      [...new Set(anchors.map((a) => a.getAttribute('href')))]
    );

    expect(hrefs.length).toBeGreaterThan(0);

    for (const href of hrefs) {
      const response = await request.get(href);
      expect(response.status(), `${href} should not be broken`).toBeLessThan(400);
    }
  });
});
