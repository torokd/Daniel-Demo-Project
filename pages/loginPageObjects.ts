import { type Locator, type Page } from "@playwright/test";
import dotenv from 'dotenv';

dotenv.config();

export class LoginPage {
  readonly page: Page;

  readonly baseURL: string;
  readonly password: string;
  readonly standardUserName: string;
  readonly blockedUserName: string;

  readonly locators: {
    userNameInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;
  };

  constructor(page: Page) {
    this.page = page;
    
    this.baseURL = process.env.BASE_URL || '';
    this.password = process.env.PASSWORD || '';
    this.standardUserName = process.env.STANDARD_USER_NAME || '';
    this.blockedUserName = process.env.BLOCKED_USER_NAME || '';

    this.locators = {
      userNameInput: page.locator('text=Username'),
      passwordInput: page.locator('text=Password'),
      loginButton: page.locator('text=Login'),
    }
    
  };

  async goToLoginPage() {
    await this.page.goto(this.baseURL);
  }

  async login(userName) {
    await this.locators.userNameInput.fill(userName);
    await this.locators.passwordInput.fill(this.password);
    await this.locators.loginButton.click();
  }
};