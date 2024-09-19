const { By, Builder, Browser, WebElement } = require('selenium-webdriver');
const assert = require('assert');



(async function firstTest() {
    let startTime = Date.now()
    function func(x){
        return Math.log(Math.abs(12 * Math.sin(x)));
    }
    console.log(123);
    let driver;
    try {
        driver = await new Builder().forBrowser(Browser.CHROME).build();
        await driver.get('https://suninjuly.github.io/math.html');

        var inputValue = await driver.findElement(By.id('input_value'));
        let number = parseInt(await inputValue.getText());

        //fill answer
        await driver.findElement(By.id('answer')).sendKeys(func(number));
        //checkbox
        await driver.findElement(By.id('robotCheckbox')).click();
        //radio
        await driver.findElement(By.id('robotsRule')).click();
        //button
        await driver.findElement(By.className('btn')).click();
    }
    catch (e) {
        console.log(e);
    }
    finally {
        const duration = (Date.now() - startTime) / 1000;
        console.log(`Test finished in ${duration} seconds`);
        await driver.quit();
    }
})();
