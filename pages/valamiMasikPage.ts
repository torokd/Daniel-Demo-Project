import { type Locator, type Page } from "@playwright/test";

export class ValamiMasikPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}
