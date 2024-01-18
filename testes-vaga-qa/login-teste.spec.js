import { test, selectors } from '@playwright/test';

const LOGIN = 'standard_user';
const PASSWORD = 'secret_sauce';
const NAME = 'Lucas';
const LASTNAME = 'Souza';
const ZIPCODE = '85811140';

test.beforeEach(async ({ page }) => {
    selectors.setTestIdAttribute('data-test')
    await page.goto('https://www.saucedemo.com/v1/');
});

test('Acessar o site', async ({ page }) => {
    await page.getByTestId('username').fill(LOGIN);
    await page.getByTestId('password').fill(PASSWORD);
    await page.click('text=LOGIN');

    await page.click('text=Sauce Labs Bike Light');
    await page.click('text=ADD TO CART');

    await page.click('.shopping_cart_link');
    await page.click('text=CHECKOUT');

    await page.getByTestId('firstName').fill(NAME);
    await page.getByTestId('lastName').fill(LASTNAME);
    await page.getByTestId('postalCode').fill(ZIPCODE);

    await page.click('text=CONTINUE')

    await page.click('text=FINISH')

    await page.screenshot({ path: 'testes-vaga-qa/screenshot.png', fullPage: true });

});