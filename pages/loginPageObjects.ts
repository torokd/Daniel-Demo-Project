import { type Locator, type Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;

  readonly locators: {
    userNameInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;
    loginErrorMessage: Locator;
    hamburgerMenuIcon: Locator;
  };

  readonly baseURL: string;
  readonly password: string;
  readonly standardUserName: string;
  readonly blockedUserName: string;

  constructor(page: Page) {
    this.page = page;

    this.locators = {
      userNameInput: page.locator('[id="user-name"]'),
      passwordInput: page.locator('[id="password"]'),
      loginButton: page.locator('[id="login-button"]'),
      hamburgerMenuIcon: page.locator('[class="bm-burger-button"]'),
      loginErrorMessage: page.locator('[data-test="error"]')
    }
    
    this.baseURL = 'https://www.saucedemo.com/v1/';
    this.password = 'secret_sauce';
    this.standardUserName = 'standard_user';
    this.blockedUserName = 'locked_out_user';
  };

  async goToLoginPage() {
    await this.page.goto(this.baseURL);
  }

/*  async screenshot() {
    await this.page.screenshot({ path: 'screenshot.png', fullPage: true });
  }*/

  async login(userName) {
    await this.locators.userNameInput.fill(userName);
    await this.locators.passwordInput.fill(this.password);
    await this.locators.loginButton.click();
  }

  async valami() {
    await this.page.goForward();
  }
}
