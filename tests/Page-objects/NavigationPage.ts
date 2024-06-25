
import { Page } from "@playwright/test";

 export class NavigationPage {

    readonly page: Page
    constructor(page: Page){
        this.page = page
    }
    async FillInForm (){
        await this.page.goto('https://webdriveruniversity.com/');
        const page1Promise = page.waitForEvent('popup');
        await this.page.getByRole('link', { name: 'CONTACT US Contact Us Form' }).click();
        const page1 = await page1Promise;
    }
}
import { Page } from 'playwright';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string) {
    await this.page.goto(url);
  }
}