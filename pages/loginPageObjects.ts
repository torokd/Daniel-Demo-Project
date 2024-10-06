import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly userNameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly hamburgerMenuIcon: Locator;
  readonly baseURL: string;
  readonly standardUserName: string;
  readonly password: string;
  readonly blockedUserName: string;

  constructor(page: Page) {
    this.page = page;
    this.userNameInput = page.locator('[id="user-name"]');
    this.passwordInput = page.locator('[id="password"]');
    this.loginButton  = page.locator('[id="login-button"]');
    this.baseURL = 'https://www.saucedemo.com/';
    this.standardUserName = 'standard_user';
    this.blockedUserName = '';
    this.password = 'secret_sauce';
    this.hamburgerMenuIcon = page.locator('[id="react-burger-menu-btn"]');
  }
}