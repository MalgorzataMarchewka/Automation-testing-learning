import { BasePage } from './BasePage';

export class ContactUsPage extends BasePage {
  static firstNameLoc= 'First Name'; 
  async fillForm(firstName: string, lastName: string, email: string, comments: string) {
    await this.page.getByPlaceholder(ContactUsPage.firstNameLoc).fill(firstName);
    await this.page.getByPlaceholder('Last Name').fill(lastName);
    await this.page.getByPlaceholder('Email Address').fill(email);
    await this.page.getByPlaceholder('Comments').fill(comments);
  }

  async resetForm() {
    await this.page.getByRole('button', { name: 'RESET' }).click();
  }

  async submitForm() {
    await this.page.getByRole('button', { name: 'SUBMIT' }).click();
  }

  async verifyError() {
    await this.page.getByText('Error: all fields are').click();
  }
}
