const puppeteer = require('puppeteer')


async function goToWW() {
  const browser = await puppeteer.launch({
      headless: false
  });
  const page = await browser.newPage();
  await page.goto('https://web.whatsapp.com/');
  await page.waitForNavigation()
  console.log(page.url());
}

goToWW()
