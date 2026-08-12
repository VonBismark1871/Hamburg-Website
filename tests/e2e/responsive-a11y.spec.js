import { test, expect } from '@playwright/test';

const pages = ['/', '/preise', '/referenzen', '/ueber-uns', '/kontakt'];

test.describe('layout integrity', () => {
  for (const path of pages) {
    test(`${path} never scrolls horizontally`, async ({ page }) => {
      await page.goto(path);
      await page.waitForLoadState('networkidle');

      const overflow = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth
      }));

      // A one-pixel rounding difference is tolerable; anything beyond that is a real overflow.
      expect(
        overflow.scrollWidth - overflow.clientWidth,
        `${path} overflows its viewport horizontally`
      ).toBeLessThanOrEqual(1);
    });
  }
});

test.describe('accessibility basics', () => {
  for (const path of pages) {
    test(`${path} gives every image an alt attribute`, async ({ page }) => {
      await page.goto(path);

      const missing = await page.locator('img:not([alt])').count();
      expect(missing, `${path} has images without alt text`).toBe(0);
    });
  }

  test('heading levels start at h1 and never skip a level', async ({ page }) => {
    await page.goto('/');

    const levels = await page
      .locator('h1, h2, h3, h4, h5, h6')
      .evaluateAll((nodes) => nodes.map((node) => Number(node.tagName[1])));

    expect(levels[0], 'the first heading must be an h1').toBe(1);

    for (let i = 1; i < levels.length; i += 1) {
      expect(
        levels[i] - levels[i - 1],
        `heading jumps from h${levels[i - 1]} to h${levels[i]}`
      ).toBeLessThanOrEqual(1);
    }
  });

  test('interactive elements are reachable by keyboard', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name === 'mobile-chromium', 'keyboard traversal is a desktop concern');

    await page.goto('/');
    await page.keyboard.press('Tab');

    const focused = await page.evaluate(() => document.activeElement?.tagName ?? null);
    expect(['A', 'BUTTON', 'INPUT']).toContain(focused);
  });

  test('the page declares its language as German', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('html')).toHaveAttribute('lang', /^de/);
  });
});
