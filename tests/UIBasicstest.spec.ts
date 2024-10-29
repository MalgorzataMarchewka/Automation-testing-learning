import test from "node:test";
import { AjaxLoaderPage } from "./AjaxLoaderPage";
import { DatepickerPage } from "./DatePicker";
import { AutocompletePage } from "./AutocompletePage";
import { NavigationPage } from "./Page-objects/NavigationPage";
import { DropdownCheckboxesPage } from "./DropdownCheckboxesPage";




test('Browser Context Playwright test', async ({browser})=>
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
});

test('Browser Context university test', async ({browser})=>
{

  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://webdriveruniversity.com/");
  await page.locator("dev toolsy")
});

test('test reset', async ({ page }) => {
  const homePage = new HomePage(page);
  const contactUsPage = new ContactUsPage(page);

  await homePage.navigate('https://webdriveruniversity.com/');
  const contactPage = await homePage.clickContactUs();
  await contactPage.fillForm('Gosia', 'Marchewka', 'gosia.test@mail.com', 'Test');
  await contactPage.resetForm();
});


test('datepicker2', async ({ page }) => {
const datepickerPage = new DatepickerPage(page);
await datepickerPage.navigate('https://jqueryui.com/datepicker/')
  await page.frameLocator('iframe').locator('#datepicker').click();
  await page.frameLocator('iframe').getByRole('link', { name: '29' }).click();
});

test('ajax-loader', async ({ page }) => {
  const ajaxLoaderPage = new AjaxLoaderPage(page);
  await ajaxLoaderPage.navigate('https://loading.io/')
  await page.getByRole('link', { name: 'Get Start' }).click();
  await page.locator('div:nth-child(12) > .spr').first().click();
  await page.getByText('Save as Asset', { exact: true }).click();
});

test('test', async ({ page }) => {
  await page.goto('https://www.google.pl/');
  await page.getByRole('button', { name: 'Zaakceptuj wszystko' }).click();
  await page.getByLabel('Szukaj', { exact: true }).fill('Jamnik');
  await page.getByRole('button', { name: 'Dachshunds | K9 Nation |' }).click();
});


test('not all data', async ({ page }) => {
  const homePage = new HomePage(page);
  const contactUsPage = await homePage.navigate('https://webdriveruniversity.com/').then(() => homePage.clickContactUs());

  await contactUsPage.fillForm('Gosia', 'Test', '', '');
  await contactUsPage.submitForm();
  await contactUsPage.verifyError();
});


test('wrong mail', async ({ page }) => {
  const homePage = new HomePage(page);
  const contactUsPage = new ContactUsPage(page);

  await homePage.navigate('https://webdriveruniversity.com/');
  const contactPage = await homePage.clickContactUs();
  await contactPage.fillForm('Gosia', 'Test', 'gosia@mail.', 'Test');
  await contactPage.submitForm();
});

test('fill all', async ({ page }) => {
  const homePage = new HomePage(page);
  const contactUsPage = new ContactUsPage(page);

  await homePage.navigate('https://webdriveruniversity.com/');
  const contactPage = await homePage.clickContactUs();
  await contactPage.fillForm('Gosia', 'Test', 'mail@mail.com', 'test');
  await contactPage.submitForm();
});

test('dropdown ect.', async ({ page }) => {
  const dropdownCheckboxesPage = new DropdownCheckboxesPage(page);
  await dropdownCheckboxesPage.selectDropdownOptions('https://webdriveruniversity.com/')
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'DROPDOWN, CHECKBOXE(S) &' }).click();
  const page1 = await page1Promise;
});


test('dropdown check', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'DROPDOWN, CHECKBOXE(S) &' }).click();
  const page1 = await page1Promise;

  const dropdownSelections = [
    ['#dropdowm-menu-1', 'c#', 'python', 'sql'],
    ['#dropdowm-menu-2', 'maven', 'testng', 'junit'],
    ['#dropdowm-menu-3', 'css', 'javascript', 'jquery']
  ];

  for (const [selector, ...options] of dropdownSelections) {
    for (const option of options) {
      await page1.locator(selector).selectOption(option);
    }
  }
});

test('checboxes', async ({ page }) => {
  const homePage = new HomePage(page);
  const dropdownCheckboxesPage = new DropdownCheckboxesPage(page);

  await homePage.navigate('https://webdriveruniversity.com/');
  const dropdownPage = await homePage.clickDropdownCheckboxes();
  await dropdownPage.toggleCheckboxes();
});

test('checkboxes', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/');
  const page1 = await page.waitForEvent('popup', () => 
    page.getByRole('link', { name: 'DROPDOWN, CHECKBOXE(S) &' }).click()
  );

  const actions = [
    { text: 'Option 1', action: 'click' },
    { text: 'Option 2', action: 'click' },
    { label: 'Option 4', action: 'check' },
    { label: 'Option 2', action: 'uncheck' },
    { label: 'Option 4', action: 'uncheck' }
  ];

  for (const { text, label, action } of actions) {
    if (text) {
      await page1.getByText(text)[action]();
    } else if (label) {
      await page1.getByLabel(label)[action]();
    }
  }
});


async selectRadioButtons() {
  const radioButtons = this.page.locator('input[name="color"]');

  const indicesToCheck = [0, 1, 2, 3, 4, 1, 0, 2];
  for (const index of indicesToCheck) {
    await radioButtons.nth(index).check();
  }

  await this.page.locator('div').filter({ hasText: 'Green Blue Yellow Orange' }).nth(3).click();
}
}
}
test('radio buttons', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/');
  const page1 = await page.waitForEvent('popup', () => 
    page.getByRole('link', { name: 'DROPDOWN, CHECKBOXE(S) &' }).click()
  );

  const radioButtons = page1.locator('input[name="color"]');
  const indicesToCheck = [0, 1, 2, 3, 4, 1, 0, 2];

  for (const index of indicesToCheck) {
    await radioButtons.nth(index).check();
  }

  await page1.locator('div').filter({ hasText: 'Green Blue Yellow Orange' }).nth(3).click();
});

test('datepicker', async ({ page }) => {
  const homePage = new HomePage(page);
  const datepickerPage = new DatepickerPage(page);
  await homePage.navigate('https://webdriveruniversity.com/');
  const datepickerPopup = await homePage.clickDatepicker();
  await datepickerPopup.selectDate('30');
});

test('autocomplete', async ({ page }) => {
  const homePage = new HomePage(page);
  const autocompletePopup = await homePage.navigate('https://webdriveruniversity.com/')
    .then(() => homePage.clickAutocomplete());

  await autocompletePopup.fillAutocomplete('ca', 'Carrots');
  await autocompletePopup.fillAutocomplete('app', 'Apple');
  await autocompletePopup.submitAutocomplete();
});


test('ajaxloader', async ({ page }) => {
  const ajaxLoaderPage = new AjaxLoaderPage(page);
  await ajaxLoaderPage.navigate('https://webdriveruniversity.com/');

  const page1 = await page.waitForEvent('popup', async () => {
    await page.getByRole('link', { name: 'AJAX LOADER Wait..... for the' }).click();
  });

  await page1.getByText('CLICK ME!').click();
  await page1.getByRole('button', { name: 'Close' }).click();
});


test('ajaxloader', async ({ page }) => {
  const homePage = new HomePage(page);
  const ajaxLoaderPage = new AjaxLoaderPage(page);

  await homePage.navigate('https://webdriveruniversity.com/');
  const ajaxLoaderPopup = await homePage.clickAjaxLoader();
  await ajaxLoaderPopup.clickAjaxButton();
});


function selectRadioButtons() {
  throw new Error("Function not implemented.");
}

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('Gosia');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('Password1!');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="error-button"]').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('#login_button_container div').nth(3).click();
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
});

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('problem_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
});

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('problem_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="product-sort-container"]').selectOption('za');
  await page.locator('[data-test="product-sort-container"]').selectOption('lohi');
  await page.getByText('Name (A to Z)Name (A to Z)').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="inventory-sidebar-link"]').click();
  await page.locator('[data-test="about-sidebar-link"]').click();
});

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://saucelabs.com/error/404');
});

import { test, expect } from '@playwright/test';

test('Complete purchase flow on Sauce Demo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  
  // Login
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  // Add items to cart
  const items = [
    'sauce-labs-backpack', 
    'sauce-labs-bike-light', 
    'sauce-labs-bolt-t-shirt', 
    'sauce-labs-fleece-jacket'
  ];
  for (const item of items) {
    await page.click(`[data-test="add-to-cart-${item}"]`);
  }

  // Navigate to cart and remove an item
  await page.click('[data-test="shopping-cart-link"]');
  await page.click('[data-test="remove-sauce-labs-fleece-jacket"]');

  // Proceed to checkout
  await page.click('[data-test="checkout"]');
  await page.fill('[data-test="firstName"]', 'Test');
  await page.fill('[data-test="lastName"]', 'Name');
  await page.fill('[data-test="postalCode"]', '10005');
  await page.click('[data-test="continue"]');

  // Finish purchase and return to products page
  await page.click('[data-test="finish"]');
  await page.click('[data-test="back-to-products"]');
});

import { test } from '@playwright/test';
import { LoginPage } from './loginPage';

test('Complete purchase flow on Sauce Demo', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('standard_user', 'secret_sauce');

  // Continue with the rest of the test...
});