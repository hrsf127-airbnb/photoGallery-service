import puppeteer from 'puppeteer';
import App from '../client/src/components/App.jsx';

describe('Image Grid Component Test Suite', () => {
  let page;
  let browser;
  const width = 1920;
  const height = 1080;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 80,
      args: [`--window-size=${width},${height}`],
    });
    page = await browser.newPage();
    await page.setViewport({ width, height });
  });
  afterAll(() => {
    browser.close();
  });

  it('The ImageGrid should change on cursor hover', async () => {
    await page.goto('http://localhost:3003/');
    await page.hover('#app');
    await page.screenshot({ path: 'hover.png' });
    await browser.close();
  }, 15000);
});
