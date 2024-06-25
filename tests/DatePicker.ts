import { BasePage } from './BasePage';

export class DatepickerPage extends BasePage {
  async selectDate(date: string) {
    await this.page.locator('i').click();
    await this.page.getByRole('cell', { name: date }).nth(1).click();
  }
}


