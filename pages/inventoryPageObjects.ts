import { expect, type Locator, type Page } from "@playwright/test";

export class InventoryPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    //   this.userNameInput = page.locator('[id="user-name"]');
  }
}
