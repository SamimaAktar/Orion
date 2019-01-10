var puppeteer = require('puppeteer');

async function setup() {  
    const width = 1600;
    const height = 1040;
    var options = {
        headless: false,
        appMode: true,
        slowMo: 50,
        devtools: false,
        ignoreHTTPSErrors: true,
        args: [`--window-size=${width},${height}`, '--start-fullscreen']
    };

    var browser = await puppeteer.launch(options);
    var page = await browser.newPage();
    var vp = {
        width: width,
        height: height
    };

    await page.setViewport(vp);
       
    return {
        browser,
        page
    };
}

module.exports = {
    setup
};