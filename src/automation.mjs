import puppeteer from 'puppeteer';

export default async function webLaunch(query) {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.goto(`https://genius.com/search?q=${query}`);

  await browser.close();
};