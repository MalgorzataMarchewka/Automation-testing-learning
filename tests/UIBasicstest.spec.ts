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
  await page.locator('.SDkEP').click();
  await page.getByLabel('Szukaj', { exact: true }).fill('Jamnik');
  await page.getByRole('button', { name: 'Dachshunds | K9 Nation |' }).click();
});

test('not all data', async ({ page }) => {
  const homePage = new HomePage(page);
  const contactUsPage = new ContactUsPage(page);

  await homePage.navigate('https://webdriveruniversity.com/');
  const contactPage = await homePage.clickContactUs();
  await contactPage.fillForm('Gosia', 'Test', '', '');
  await contactPage.submitForm();
  await contactPage.verifyError();
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
  await page1.locator('#dropdowm-menu-1').selectOption('c#');
  await page1.locator('#dropdowm-menu-2').selectOption('maven');
  await page1.locator('#dropdowm-menu-3').selectOption('css');
  await page1.locator('#dropdowm-menu-1').selectOption('python');
  await page1.locator('#dropdowm-menu-2').selectOption('testng');
  await page1.locator('#dropdowm-menu-3').selectOption('javascript');
  await page1.locator('#dropdowm-menu-1').selectOption('sql');
  await page1.locator('#dropdowm-menu-2').selectOption('junit');
  await page1.locator('#dropdowm-menu-3').selectOption('jquery');
});

test('checboxes', async ({ page }) => {
  const homePage = new HomePage(page);
  const dropdownCheckboxesPage = new DropdownCheckboxesPage(page);

  await homePage.navigate('https://webdriveruniversity.com/');
  const dropdownPage = await homePage.clickDropdownCheckboxes();
  await dropdownPage.toggleCheckboxes();
});

test('checboxes', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'DROPDOWN, CHECKBOXE(S) &' }).click();
  const page1 = await page1Promise;
  await page1.getByText('Option 1').click();
  await page1.getByText('Option 2').click();
  await page1.getByLabel('Option 4').check();
  await page1.getByLabel('Option 2').uncheck();
  await page1.getByLabel('Option 4').uncheck();
});

async selectRadioButtons() {
  await this.page.locator('input[name="color"]').first().check();
  await this.page.locator('input[name="color"]').nth(1).check();
  await this.page.locator('div').filter({ hasText: 'Green Blue Yellow Orange' }).nth(3).click();
  await this.page.locator('input[name="color"]').nth(2).check();
  await this.page.locator('input[name="color"]').nth(3).check();
  await this.page.locator('input[name="color"]').nth(4).check();
  await this.page.locator('input[name="color"]').nth(1).check();
  await this.page.locator('input[name="color"]').first().check();
  await this.page.locator('input[name="color"]').nth(2).check();
}
}
test('radio buttons', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'DROPDOWN, CHECKBOXE(S) &' }).click();
  const page1 = await page1Promise;
  await page1.locator('input[name="color"]').first().check();
  await page1.locator('input[name="color"]').nth(1).check();
  await page1.locator('div').filter({ hasText: 'Green Blue Yellow Orange' }).nth(3).click();
  await page1.locator('input[name="color"]').nth(2).check();
  await page1.locator('input[name="color"]').nth(3).check();
  await page1.locator('input[name="color"]').nth(4).check();
  await page1.locator('input[name="color"]').nth(1).check();
  await page1.locator('input[name="color"]').first().check();
  await page1.locator('input[name="color"]').nth(2).check();
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
  const autocompletePage = new AutocompletePage(page);
  await homePage.navigate('https://webdriveruniversity.com/');
  const autocompletePopup = await homePage.clickAutocomplete();
  await autocompletePopup.fillAutocomplete('ca', 'Carrots');
  await autocompletePopup.fillAutocomplete('app', 'Apple');
  await autocompletePopup.submitAutocomplete();
});

test('ajaxloader', async ({ page }) => {
  const ajaxLoaderPage = new AjaxLoaderPage(page);
  await ajaxLoaderPage.navigate('https://webdriveruniversity.com/')
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'AJAX LOADER Wait..... for the' }).click();
  const page1 = await page1Promise;
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

