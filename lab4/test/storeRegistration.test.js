const { By, Builder, Browser, WebElement } = require('selenium-webdriver');
const generatePassword = require('generate-password');

const firstNames = [
    'John', 'Jane', 'Michael', 'Emily', 'Chris', 'Jessica', 'Matthew', 'Sarah', 'David', 'Laura'
];

const middleNames = [
    'James', 'Marie', 'William', 'Ann', 'Joseph', 'Lee', 'Elizabeth', 'Paul', 'Grace', 'Allen'
];

const secondNames = [
    'Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor'
];

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

(async function openLinks() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('http://demo-store.seleniumacademy.com/');
        await driver.get('http://demo-store.seleniumacademy.com/customer/account/create/');

        const firstName = getRandomElement(firstNames);
        const middleName = getRandomElement(middleNames);
        const secondName = getRandomElement(secondNames);
        const email = `${generatePassword.generate({ length: 10, numbers: true })}@example.com`;
        const password = generatePassword.generate({ length: 12, numbers: true, symbols: true });

        console.log(`name: ${firstName} ${middleName} ${secondName}`);
        console.log(`email: ${email}`);
        console.log(`pass: ${password}`);

        await driver.findElement(By.id('firstname')).sendKeys(firstName);
        await driver.findElement(By.id('middlename')).sendKeys(middleName);
        await driver.findElement(By.id('lastname')).sendKeys(secondName);
        await driver.findElement(By.id('email_address')).sendKeys(email);
        await driver.findElement(By.id('password')).sendKeys(password);
        await driver.findElement(By.id('confirmation')).sendKeys(password);

        let isSubscribedCheckbox = await driver.findElement(By.id('is_subscribed'));
        if ((await isSubscribedCheckbox.isSelected())) {
            await isSubscribedCheckbox.click();
        }

    } finally {
        //await driver.quit();
    }
})();