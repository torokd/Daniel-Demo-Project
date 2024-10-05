import { test, expect } from "@playwright/test";

test("Successful login with standard user", async ({ page }) => {
  const userNameInput = '[id="user-name"]';
  const passwordInput = '[id="password"]';
  const loginButton = '[id="login-button"]';
  const hamburgerMenuIcon = '[id="react-burger-menu-btn"]';
  const baseURL = "https://www.saucedemo.com/";
  const standardUserName = "standard_user";
  const standardUserPassword = "secret_sauce";

  // Navigate to the site
  await page.goto(baseURL);

  // Fill out username and pass
  await page.locator(userNameInput).fill(standardUserName);
  await page.locator(passwordInput).fill(standardUserPassword);

  // Press on the button
  await page.locator(loginButton).click();

  // I can see the hamburger menu icon
  await expect(page.locator(hamburgerMenuIcon)).toBeVisible();
});
