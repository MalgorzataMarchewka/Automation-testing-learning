const {test} = require("@playwright/test");



test('Browser Context Playwright test', async ({browser})=>
{

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
  await page.goto('https://webdriveruniversity.com/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'CONTACT US Contact Us Form' }).click();
  const page1 = await page1Promise;
  await page1.getByPlaceholder('First Name').click();
  await page1.getByPlaceholder('First Name').fill('Gosia');
  await page1.getByPlaceholder('Last Name').click();
  await page1.getByPlaceholder('Last Name').fill('Marchewka');
  await page1.getByPlaceholder('Email Address').click();
  await page1.getByPlaceholder('Email Address').fill('gosia.test@mail.com');
  await page1.getByPlaceholder('Comments').click();
  await page1.getByPlaceholder('Comments').fill('Test');
  await page1.getByRole('button', { name: 'RESET' }).click();
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
  await page.goto('https://webdriveruniversity.com/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'CONTACT US Contact Us Form' }).click();
  const page1 = await page1Promise;
  await page1.getByPlaceholder('First Name').click();
  await page1.getByPlaceholder('First Name').fill('Gosia');
  await page1.getByPlaceholder('Last Name').click();
  await page1.getByPlaceholder('Last Name').fill('Test');
  await page1.getByRole('button', { name: 'SUBMIT' }).click();
  await page1.getByText('Error: all fields are').click();
});

test('wrong mail', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'CONTACT US Contact Us Form' }).click();
  const page1 = await page1Promise;
  await page1.getByPlaceholder('First Name').click();
  await page1.getByPlaceholder('First Name').fill('Gosia');
  await page1.getByPlaceholder('Last Name').click();
  await page1.getByPlaceholder('Last Name').fill('Test');
  await page1.getByPlaceholder('Email Address').click();
  await page1.getByPlaceholder('Email Address').fill('gosia@mail.');
  await page1.getByPlaceholder('Comments').click();
  await page1.getByPlaceholder('Comments').fill('Test');
  await page1.getByRole('button', { name: 'SUBMIT' }).click();
});
test('fill all', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'CONTACT US Contact Us Form' }).click();
  const page1 = await page1Promise;
  await page1.getByPlaceholder('First Name').click();
  await page1.getByPlaceholder('First Name').fill('Gosia');
  await page1.getByPlaceholder('Last Name').click();
  await page1.getByPlaceholder('Last Name').fill('Test');
  await page1.getByPlaceholder('Email Address').click();
  await page1.getByPlaceholder('Email Address').fill('mail@mail.com');
  await page1.getByPlaceholder('Comments').click();
  await page1.getByPlaceholder('Comments').fill('test');
  await page1.getByRole('button', { name: 'SUBMIT' }).click();
});

test('dropdown ect.', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/');
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
  await page.goto('https://webdriveruniversity.com/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'DATEPICKER Datepicker What' }).click();
  const page1 = await page1Promise;
  await page1.locator('i').click();
  await page1.getByRole('cell', { name: '30' }).nth(1).click();
});
\\ABCD

test('autocomplete', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'AUTOCOMPLETE TEXTFIELD' }).click();
  const page1 = await page1Promise;
  await page1.getByPlaceholder('Food Item').click();
  await page1.getByPlaceholder('Food Item').fill('ca');
  await page1.getByText('Carrots').click();
  await page1.getByPlaceholder('Food Item').click();
  await page1.getByPlaceholder('Food Item').fill('app');
  await page1.getByText('Apple').click();
  await page1.getByRole('button', { name: 'Submit' }).click();
});

test('ajaxloader', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'AJAX LOADER Wait..... for the' }).click();
  const page1 = await page1Promise;
  await page1.getByText('CLICK ME!').click();
  await page1.getByRole('button', { name: 'Close' }).click();
});
