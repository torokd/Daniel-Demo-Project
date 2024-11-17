import { type Locator, type Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly locators: {
    inputs: {
      userNameInput: Locator;
      passwordInput: Locator;
    };
    buttons: {
      loginButton: Locator;
    };
    errorMessages: {
      loginErrorMessage: Locator;
    };
    icons: {
      hamburgerMenuIcon: Locator;
    };
    texts: {
      loginError: {
        EN: string;
        DE: string;
      };
    };
  };
  readonly credentials: {
    standardUserName: string;
    blockedUserName: string;
    password: string;
  };
  readonly urls: {
    baseURL: string;
  };

  constructor(page: Page) {
    this.page = page;
    this.locators = {
      inputs: {
        userNameInput: page.locator('[id="user-name"]'),
        passwordInput: page.locator('[id="password"]'),
      },
      buttons: {
        loginButton: page.locator('[id="login-button"]'),
      },
      icons: {
        hamburgerMenuIcon: page.locator('[id="react-burger-menu-btn"]'),
      },
      errorMessages: {
        loginErrorMessage: page.locator('[data-test="error"]'),
      },
      texts: {
        loginError: {
          EN: "valamiEN",
          DE: "valamiDE",
        },
      },
    };
    this.credentials = {
      standardUserName: "standard_user",
      blockedUserName: "locked_out_user",
      password: "secret_sauce",
    };
    this.urls = {
      baseURL: "https://www.saucedemo.com/",
    };
  }

  async goToLoginPage() {
    await this.page.goto(this.urls.baseURL);
  }

  async login(userName) {
    await this.locators.inputs.userNameInput.fill(userName);
    await this.locators.inputs.passwordInput.fill(this.credentials.password);
    await this.locators.buttons.loginButton.click();
  }

  async valami() {
    await this.page.goForward();
  }
}
