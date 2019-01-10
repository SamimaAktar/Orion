var puppeteer = require('puppeteer');

let browser
let page

beforeAll(async () => {
  browser = await puppeteer.launch()
  page = await browser.newPage()
})

describe('Google Homepage', () => {
  test('has title "Google"', async () => {
    await page.goto('https://www.google.com/')
    const title = await page.title()
    expect(title).toBe('Google')
  })
  

  afterAll( async () => {
    await browser.close()
  })
})