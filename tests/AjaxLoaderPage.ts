import { BasePage } from './BasePage';

export class AjaxLoaderPage extends BasePage {
  async clickAjaxButton() {
    await this.page.getByText('CLICK ME!').click();
    await this.page.getByRole('button', { name: 'Close' }).click();
  }
}
