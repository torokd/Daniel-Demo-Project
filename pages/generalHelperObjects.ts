import { type Page } from "@playwright/test";

export class GeneralHelperPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  };

  async screenshot() {
    await this.page.screenshot({ path: 'screenshot.png', fullPage: true });
  }

}
