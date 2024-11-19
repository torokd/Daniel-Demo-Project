import { type Locator, type Page } from "@playwright/test";

export class AboutPageObjects {
  readonly page: Page;
  readonly locators: {
    test: Locator
  }

  constructor(page: Page) {
    this.page = page;
  }
}
