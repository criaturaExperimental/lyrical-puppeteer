import puppeteer from 'puppeteer';
import AskForInput from './readline';

const question = new AskForInput();

const query = question.ask('how are you doing? ');

query.then((answer) => {
  console.log(answer);
})

// (async () => {
//   const browser = await puppeteer.launch({
//     headless: false
//   });
//   const page = await browser.newPage();
//   await page.goto('https://google.com');

//   await browser.close();
// })();