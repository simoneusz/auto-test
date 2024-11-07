const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
    })

    it('should open the app and check the title', async () => {
        const viewsMenu = await $('~Views');
        await viewsMenu.click();

        const autoCompleteMenu = await $('~Auto Complete');
        await autoCompleteMenu.click();

        const screenTopMenu = await $('~Screen Top');
        await screenTopMenu.click();

        const countryField = await $('~countryName');
        await countryField.setValue('Ukraine');

        const enteredText = await countryField.getText();
        console.assert(enteredText === 'Ukraine', `Expected 'Ukraine', but got '${enteredText}'`);

        console.log('Country name entered correctly.');
    });
})

