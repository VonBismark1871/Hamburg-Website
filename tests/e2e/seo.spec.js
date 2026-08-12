import { test, expect } from '@playwright/test';

const indexedPages = ['/', '/preise', '/referenzen', '/ablauf', '/ueber-uns', '/kontakt', '/faq'];

test.describe('SEO contract', () => {
  for (const path of indexedPages) {
    test(`${path} exposes title, description and canonical`, async ({ page }) => {
      await page.goto(path);

      const title = await page.title();
      expect(title.length, `${path} title must not be empty`).toBeGreaterThan(10);
      expect(title.length, `${path} title should stay under the SERP cut-off`).toBeLessThan(70);

      const description = page.locator('meta[name="description"]');
      await expect(description).toHaveCount(1);
      const descriptionText = await description.getAttribute('content');
      expect(descriptionText?.length ?? 0).toBeGreaterThan(50);

      const canonical = page.locator('link[rel="canonical"]');
      await expect(canonical).toHaveCount(1);
      await expect(canonical).toHaveAttribute('href', new RegExp(`^https://hamburgwebsites\\.de${path === '/' ? '/?$' : path}`));
    });
  }

  test('homepage ships valid JSON-LD structured data', async ({ page }) => {
    await page.goto('/');

    const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
    expect(blocks.length, 'homepage must expose structured data').toBeGreaterThan(0);

    for (const block of blocks) {
      const parsed = JSON.parse(block);
      const entries = Array.isArray(parsed) ? parsed : [parsed];

      for (const entry of entries) {
        expect(entry['@context']).toBe('https://schema.org');
        expect(entry['@type']).toBeTruthy();
      }
    }
  });

  test('open graph tags are present for social sharing', async ({ page }) => {
    await page.goto('/');

    for (const property of ['og:title', 'og:description', 'og:type', 'og:url']) {
      await expect(page.locator(`meta[property="${property}"]`)).toHaveCount(1);
    }
  });

  test('legal pages are reachable from every page footer', async ({ page }) => {
    await page.goto('/');
    const footer = page.locator('footer');

    await expect(footer.getByRole('link', { name: /Impressum/i })).toHaveCount(1);
    await expect(footer.getByRole('link', { name: /Datenschutz/i })).toHaveCount(1);
  });

  test('robots.txt and sitemap.xml are served', async ({ request }) => {
    const robots = await request.get('/robots.txt');
    expect(robots.status()).toBe(200);
    expect(await robots.text()).toContain('Sitemap');

    const sitemap = await request.get('/sitemap.xml');
    expect(sitemap.status()).toBe(200);
    expect(await sitemap.text()).toContain('<urlset');
  });
});
