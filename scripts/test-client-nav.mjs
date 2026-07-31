import { chromium } from 'playwright';

const BASE = process.env.BASE_URL || 'http://localhost:3004';

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const results = [];

  async function test(name, fn) {
    try {
      await fn();
      const title = await page.title();
      const url = page.url();
      const ok = !title.includes('404');
      results.push({ name, ok, url, title: title.slice(0, 80) });
      if (!ok) throw new Error(`404 at ${url}`);
    } catch (e) {
      results.push({
        name,
        ok: false,
        url: page.url(),
        error: String(e.message || e).slice(0, 200),
      });
    }
  }

  await test('EN insight — client nav from list', async () => {
    await page.goto(`${BASE}/insights`, { waitUntil: 'networkidle' });
    await page.click('a[href="/insights/seniat-tax-audit-venezuela-2026"]');
    await page.waitForURL('**/seniat-tax-audit-venezuela-2026');
  });

  await test('EN insight — hard refresh', async () => {
    await page.goto(`${BASE}/insights/seniat-tax-audit-venezuela-2026`, {
      waitUntil: 'networkidle',
    });
  });

  await test('ES insight — client nav from list', async () => {
    await page.goto(`${BASE}/es/insights`, { waitUntil: 'networkidle' });
    await page.click('a[href*="/es/insights/fiscalizacion-seniat-venezuela-2026"]');
    await page.waitForURL('**/fiscalizacion-seniat-venezuela-2026');
  });

  await test('ES insight — hard refresh', async () => {
    await page.goto(`${BASE}/es/insights/fiscalizacion-seniat-venezuela-2026`, {
      waitUntil: 'networkidle',
    });
  });

  await test('EN practice — client nav', async () => {
    await page.goto(`${BASE}/practices`, { waitUntil: 'networkidle' });
    await page.click('a[href="/practices/tax"]');
    await page.waitForURL('**/practices/tax');
  });

  await test('EN practice — hard refresh', async () => {
    await page.goto(`${BASE}/practices/tax`, { waitUntil: 'networkidle' });
  });

  await test('EN home — hard refresh', async () => {
    await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
  });

  await test('Insights list — client nav from home', async () => {
    await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
    await page.click('a[href="/insights"]');
    await page.waitForURL('**/insights');
  });

  await test('Insights list — hard refresh', async () => {
    await page.goto(`${BASE}/insights`, { waitUntil: 'networkidle' });
  });

  console.log(JSON.stringify(results, null, 2));
  const failed = results.filter((r) => !r.ok);
  await browser.close();
  process.exit(failed.length ? 1 : 0);
}

main();
