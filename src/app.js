const puppeteer = require('puppeteer');
const AskForInput = require('./readline');

const question = new AskForInput();

question.ask('how are you doing? ');

// let parameter = process.argv[2];

// console.log(parameter);

// (async () => {
//   const browser = await puppeteer.launch({
//     headless: false
//   });
//   const page = await browser.newPage();
//   await page.goto('https://google.com');

//   await browser.close();
// })();