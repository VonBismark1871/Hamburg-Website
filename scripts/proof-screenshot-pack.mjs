import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium, devices } from 'playwright';

const baseUrl = (process.env.SCREENSHOT_BASE_URL || 'https://hamburgwebsites.de').replace(/\/$/, '');
const outputDir = path.resolve(process.cwd(), process.env.SCREENSHOT_OUTPUT_DIR || 'proof/screenshots');
const timeoutMs = Number(process.env.SCREENSHOT_TIMEOUT_MS || 60000);

const targets = [
  { slug: 'home', route: '/' },
  { slug: 'preise', route: '/preise' },
  { slug: 'kontakt', route: '/kontakt' },
  { slug: 'autoservice-demo', route: '/referenzen/autoservice-demo' }
];

const desktopViewport = { width: 1440, height: 900 };
const mobileProfile = devices['iPhone 12'];

const makeFileName = (slug, variant) => `${slug}-${variant}.png`;
const resolveUrl = (route) => `${baseUrl}${route}`;

async function captureDesktop(browser, target) {
  const context = await browser.newContext({
    viewport: desktopViewport,
    deviceScaleFactor: 1,
    isMobile: false,
    hasTouch: false
  });

  try {
    const page = await context.newPage();
    await page.goto(resolveUrl(target.route), { waitUntil: 'networkidle', timeout: timeoutMs });
    await page.screenshot({
      path: path.join(outputDir, makeFileName(target.slug, 'desktop')),
      fullPage: true
    });
  } finally {
    await context.close();
  }
}

async function captureMobile(browser, target) {
  const context = await browser.newContext({
    ...mobileProfile,
    viewport: { width: 390, height: 844 }
  });

  try {
    const page = await context.newPage();
    await page.goto(resolveUrl(target.route), { waitUntil: 'networkidle', timeout: timeoutMs });
    await page.screenshot({
      path: path.join(outputDir, makeFileName(target.slug, 'mobile')),
      fullPage: true
    });
  } finally {
    await context.close();
  }
}

async function run() {
  await fs.mkdir(outputDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });

  try {
    for (const target of targets) {
      await captureDesktop(browser, target);
      await captureMobile(browser, target);
      process.stdout.write(`Captured: ${target.slug}\n`);
    }

    process.stdout.write(`Saved screenshots to: ${outputDir}\n`);
  } finally {
    await browser.close();
  }
}

run().catch((error) => {
  process.stderr.write(`${error.stack || error}\n`);
  process.exitCode = 1;
});
