const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5174/', {waitUntil: 'networkidle0'});
  const html = await page.content();
  fs.writeFileSync('rendered.html', html);
  await browser.close();
})();
