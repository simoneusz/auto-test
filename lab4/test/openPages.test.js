const { By, Builder, Browser, WebElement } = require('selenium-webdriver');

(async function openLinks() {

    function checkValidLink(links, link) {
        return link && !links.includes(link);
    }
    

    const baseUrl = 'http://demo-store.seleniumacademy.com/';
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get(baseUrl);
        let linkElements = await driver.findElements(By.css('a'));
        let links = [];
        for (let element of linkElements) {
            let href = await element.getAttribute('href');
            if (checkValidLink(links, href)) {
                console.log(href);
                links.push(href);
            }
            if(links.length >= 10) break
        }

        for (let i = 0; i < Math.min(10, links.length); i++) {
            let href = links[i];
            console.log(`Opening link: ${href}`);
            await driver.get(href);
            await driver.sleep(2000);
        }
    } finally {
        await driver.quit();
    }
})();