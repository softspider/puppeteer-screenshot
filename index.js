'use strict';

const puppeteer = require('puppeteer');

async function helloWorld() {
  // const browser = await puppeteer.launch({
  //   executablePath: './node_modules/puppeteer/.local-chromium/win64-599821/chrome-win/chrome.exe' // TODO Get rid of it
  // });
  const browser = await puppeteer.launch();
    
  const page = await browser.newPage();

  await page.goto('https://en.wikipedia.org/wiki/%22Hello,_World!%22_program');
  await page.screenshot({ path: 'wikipedia-helloworld.png' });

  const firstPar = await page.$eval('#mw-content-text p', el => el.innerText);

  console.log(firstPar); // A "Hello, World!" program is a computer program that outputs ...

  await browser.close();
}

helloWorld();