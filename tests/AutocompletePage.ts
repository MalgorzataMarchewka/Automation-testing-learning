import { BasePage } from './BasePage';

export class AutocompletePage extends BasePage {
  async fillAutocomplete(item: string, selection: string) {
    await this.page.getByPlaceholder('Food Item').fill(item);
    await this.page.getByText(selection).click();
  }

  async submitAutocomplete() {
    await this.page.getByRole('button', { name: 'Submit' }).click();
  }
}
