import { type Locator, type Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;

  readonly variables: {
    baseURL: string;
    password: string;
    standardUserName: string;
    blockedUserName: string;
    performanceUserName: string;
    problemUserName: string;
    loginErrorMessage: string;
  };

  readonly locators: {
    userNameInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;
    hamburgerMenuIcon: Locator;
    loginError: Locator;
  };

  constructor(page: Page) {
    this.page = page;
    
    this.variables = {
      baseURL: "https://www.saucedemo.com/",
      password: "secret_sauce",
      standardUserName: "standard_user",
      blockedUserName: "locked_out_user",
      performanceUserName: "performance_glitch_user",
      problemUserName: "problem_user",
      loginErrorMessage: "Epic sadface: Sorry, this user has been locked out.",
    };

    this.locators = {
      userNameInput: page.getByRole('textbox', { name: 'Username' }),
      passwordInput: page.getByRole('textbox', { name: 'Password' }),
      loginButton: page.getByRole('button', { name: 'Login' }),
      hamburgerMenuIcon: page.getByRole('button', { name: 'Open Menu' }),
      loginError: page.getByText(this.variables.loginErrorMessage),
    };
  };

  async goToMainPage(): Promise <void> {
    await this.page.goto(this.variables.baseURL);
  };

  async login(userName: string): Promise<void> {
    await this.locators.userNameInput.fill(userName);
    await this.locators.passwordInput.fill(this.variables.password);
    await this.locators.loginButton.click();
  };

};