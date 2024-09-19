const { By, Builder, Browser, WebElement } = require('selenium-webdriver');

(async function openLinks() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('http://demo-store.seleniumacademy.com/');
        await driver.get('http://demo-store.seleniumacademy.com/customer/account/create/');

        let inputs = await driver.findElements(By.css('ul.form-list input'));

        let inputList = []
        for (let input of inputs) {
            let id = await input.getAttribute('id');
            inputList.push(id);
        }
        console.log(inputList);
    } finally {
        await driver.quit();
    }
})();