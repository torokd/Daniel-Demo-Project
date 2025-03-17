import { test, expect } from "@playwright/test";
import { LoginPage } from "../utils/index";

let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.goToMainPage();
});

test("Login with standard user", { tag: '@login' }, async () => {
  await loginPage.login(loginPage.variables.standardUserName);
  await expect(loginPage.locators.hamburgerMenuIcon).toBeVisible();
});

test("Login with blocked user", { tag: '@login' }, async () => {
  await loginPage.login(loginPage.variables.blockedUserName);
  await expect(loginPage.locators.loginError).toHaveText(loginPage.variables.loginErrorMessage);
});

test("Login with performance user", { tag: '@login' }, async () => {
  await loginPage.login(loginPage.variables.performanceUserName);
  await expect(loginPage.locators.hamburgerMenuIcon).toBeVisible();
});

test("Login with problem user", { tag: '@login' }, async () => {
  await loginPage.login(loginPage.variables.problemUserName);
  await expect(loginPage.locators.hamburgerMenuIcon).toBeVisible();
});