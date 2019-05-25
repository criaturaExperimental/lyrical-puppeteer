import puppeteer from 'puppeteer';
import urlGenerator from './adapters/urlGenerator';

export default async function webLaunch(artist) {
  const browser = await puppeteer.launch({
    headless: false
  });
  const url = urlGenerator(artist);
  console.log(url)
  const page = await browser.newPage();
  await page.goto(url);
  const linkHandlers = await page.$x("//a[contains(., 'more songs')]");
  if (linkHandlers.length > 0) {
    await linkHandlers[0].click();
  } else {
    throw new Error("Link not found");
  }

  // await browser.close();
};