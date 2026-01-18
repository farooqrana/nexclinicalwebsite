import { fileURLToPath } from 'url';
import { resolve } from 'path';
import { pathToFileURL } from 'url';
import puppeteer from 'puppeteer';

async function main() {
  const root = resolve(fileURLToPath(import.meta.url), '..', '..');
  const htmlPath = resolve(root, 'docs', 'Senior_Dev_OnePager.html');
  const pdfPath = resolve(root, 'docs', 'Senior_Dev_OnePager.pdf');
  const url = pathToFileURL(htmlPath).toString();

  console.log(`Rendering: ${url}`);
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle0' });
  await page.pdf({ path: pdfPath, format: 'A4', printBackground: true, margin: { top: '0.5in', right: '0.5in', bottom: '0.5in', left: '0.5in' } });
  await browser.close();
  console.log(`✅ PDF saved to: ${pdfPath}`);
}

main().catch((err) => { console.error('PDF export failed:', err); process.exit(1); });
