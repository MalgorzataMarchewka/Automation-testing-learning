import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ContactUsPage } from '../pages/ContactUsPage';
import { DropdownCheckboxesPage } from '../pages/DropdownCheckboxesPage';
import { DatepickerPage } from '../pages/DatepickerPage';
import { AutocompletePage } from '../pages/AutocompletePage';
import { AjaxLoaderPage } from '../pages/AjaxLoaderPage';

test('test reset', async ({ page }) => {
  const homePage = new HomePage(page);
  const contactUsPage = new ContactUsPage(page);

  await homePage.navigate('https://webdriveruniversity.com/');
  const contactPage = await homePage.clickContactUs();
  await contactPage.fillForm('Gosia', 'Marchewka', 'gosia.test@mail.com', 'Test');
  await contactPage.resetForm();
});

test('datepicker2', async ({ page }) => {
  await page.goto('https://jqueryui.com/datepicker/');
  await page.frameLocator('iframe').locator('#datepicker').click();
  await page.frameLocator('iframe').getByRole('link', { name: '29' }).click();
});

test('ajax-loader', async ({ page }) => {
  await page.goto('https://loading.io/');
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

test('dropdown check', async ({ page }) => {
  const homePage = new HomePage(page);
  const dropdownCheckboxesPage = new DropdownCheckboxesPage(page);

  await homePage.navigate('https://webdriveruniversity.com/');
  const dropdownPage = await homePage.clickDropdownCheckboxes();
  await dropdownPage.selectDropdownOptions();
});

test('checboxes', async ({ page }) => {
  const homePage = new HomePage(page);
  const dropdownCheckboxesPage = new DropdownCheckboxesPage(page);

  await homePage.navigate('https://webdriveruniversity.com/');
  const dropdownPage = await homePage.clickDropdownCheckboxes();
  await dropdownPage.toggleCheckboxes();
});

test('radio buttons', async ({ page }) => {
  const homePage = new HomePage(page);
  const dropdownCheckboxesPage = new DropdownCheckboxesPage(page);

  await homePage.navigate('https://webdriveruniversity.com/');
  const dropdownPage = await homePage.clickDropdownCheckboxes();
  await dropdownPage.selectRadioButtons();
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
  const homePage = new HomePage(page);
  const ajaxLoaderPage = new AjaxLoaderPage(page);

  await homePage.navigate('https://webdriveruniversity.com/');
  const ajaxLoaderPopup = await homePage.clickAjaxLoader();
  await ajaxLoaderPopup.clickAjaxButton();
});
