import { test, expect } from "@playwright/test";
//import { LoginPage } from "../pages/loginPageObjects";
//import { GeneralHelperPage } from "../pages/generalHelperObjects";
import { LoginPage, GeneralHelperPage } from "../pages/pageHub";

let loginPage: LoginPage;
let generalHelperPage: GeneralHelperPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  generalHelperPage = new GeneralHelperPage(page);
});

test("Successful login with standard user", async () => {
  await loginPage.goToMainPage();
  await loginPage.login(loginPage.variables.standardUserName);
  await expect(loginPage.locators.hamburgerMenuIcon).toBeVisible();
});

test("Unsuccessful login with blocked user", async () => {
  await loginPage.goToMainPage();
  await loginPage.login(loginPage.variables.blockedUserName);
  await expect(loginPage.locators.loginError).toHaveText(loginPage.variables.loginErrorMessage);
});
