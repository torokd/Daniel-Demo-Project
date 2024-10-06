import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPageObjects";
let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
});

test.only("Successful login with standard user", async ({ page }) => {
  // Navigate to the site
  await page.goto(loginPage.baseURL);

  // Fill out username and pass
  await loginPage.userNameInput.fill(loginPage.standardUserName);
  await loginPage.passwordInput.fill(loginPage.password);

  // Press on the button
  await loginPage.loginButton.click();

  // I can see the hamburger menu icon
  await expect(loginPage.hamburgerMenuIcon).toBeVisible();
});

// test("Unsuccessful login with blocked user", async ({ page }) => {
//   // Navigate to the site
//   await page.goto(baseURL);

//   // Fill out username and pass
//   await page.locator(userNameInput).fill(standardUserName);
//   await page.locator(passwordInput).fill(standardUserPassword);

//   // Press on the button
//   await page.locator(loginButton).click();

//   // I can see the error message on the login screen
//   await expect(page.locator(errorMessage)).toBeVisible();
//   await expect(page.locator(errorMessage)).toHaveText('Epic sadface: Sorry, this user has been locked out.');
// });