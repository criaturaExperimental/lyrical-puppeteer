import puppeteer from 'puppeteer';
import urlGenerator from './adapters/urlGenerator';
import { clickLink } from './clickers/clickOn';

function extractItems() {
  const extractedElements = document.querySelectorAll('scrollable-data .mini_card-title');
  const items = [];
  for (let element of extractedElements) {
    items.push(element.innerText);
  }
  return items;
}

async function scrapeInfiniteScrollItems(
  page,
  extractItems,
  itemTargetCount,
  scrollDelay = 1000,
) {
  let items = [];
  try {
    let previousHeight;
    while (items.length < itemTargetCount) {
      items = await page.evaluate(extractItems);
      const scrollElement = document.querySelector('.modal_window');
      previousHeight = await page.evaluate(`${scrollElement}.scrollHeight`);
      await page.evaluate(`${scrollElement}.scrollTo(0, ${scrollElement}.scrollHeight)`);
      await page.waitForFunction(`${scrollElement}.scrollHeight > ${previousHeight}`);
      await page.waitFor(scrollDelay);
    }
  } catch(e) { }
  return items;
}

export default async function webLaunch(artist) {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const url = urlGenerator(artist);
  console.log(url)
  const page = await browser.newPage();
  await page.goto(url);
  await clickLink(page, "//a[contains(., 'more songs')]");

  const items = await scrapeInfiniteScrollItems(page, extractItems, 20);
  console.log(items);

  await browser.close();
};