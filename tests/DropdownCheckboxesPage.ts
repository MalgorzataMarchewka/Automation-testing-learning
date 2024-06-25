import { BasePage } from './BasePage';

export class DropdownCheckboxesPage extends BasePage {
  async selectDropdownOptions() {
    await this.page.locator('#dropdowm-menu-1').selectOption('c#');
    await this.page.locator('#dropdowm-menu-2').selectOption('maven');
    await this.page.locator('#dropdowm-menu-3').selectOption('css');
    await this.page.locator('#dropdowm-menu-1').selectOption('python');
    await this.page.locator('#dropdowm-menu-2').selectOption('testng');
    await this.page.locator('#dropdowm-menu-3').selectOption('javascript');
    await this.page.locator('#dropdowm-menu-1').selectOption('sql');
    await this.page.locator('#dropdowm-menu-2').selectOption('junit');
    await this.page.locator('#dropdowm-menu-3').selectOption('jquery');
  }

  async toggleCheckboxes() {
    await this.page.getByText('Option 1').click();
    await this.page.getByText('Option 2').click();
    await this.page.getByLabel('Option 4').check();
    await this.page.getByLabel('Option 2').uncheck();
    await this.page.getByLabel('Option 4').uncheck();
  }

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
