import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  async clickContactUs() {
    const page1Promise = this.page.waitForEvent('popup');
    await this.page.getByRole('link', { name: 'CONTACT US Contact Us Form' }).click();
    return await page1Promise;
  }

  async clickDropdownCheckboxes() {
    const page1Promise = this.page.waitForEvent('popup');
    await this.page.getByRole('link', { name: 'DROPDOWN, CHECKBOXE(S) &' }).click();
    return await page1Promise;
  }

  async clickDatepicker() {
    const page1Promise = this.page.waitForEvent('popup');
    await this.page.getByRole('link', { name: 'DATEPICKER Datepicker What' }).click();
    return await page1Promise;
  }

  async clickAutocomplete() {
    const page1Promise = this.page.waitForEvent('popup');
    await this.page.getByRole('link', { name: 'AUTOCOMPLETE TEXTFIELD' }).click();
    return await page1Promise;
  }

  async clickAjaxLoader() {
    const page1Promise = this.page.waitForEvent('popup');
    await this.page.getByRole('link', { name: 'AJAX LOADER Wait..... for the' }).click();
    return await page1Promise;
  }
}
