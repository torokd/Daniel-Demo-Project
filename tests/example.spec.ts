import { test, expect } from '@playwright/test';

test('Successful login with standard user', async ({ page }) => {
  // Navigate to the site
  await page.goto('https://www.saucedemo.com/');
  
  // Fill out username and pass
  await page.locator('[id="user-name"]').fill('standard_user');
  await page.locator('[id="password"]').fill('secret_sauce');
  
  // Press on the button
  await page.locator('[id="login-button"]').click();
  
  // I can see products
  await expect(page.locator('[id="react-burger-menu-btn"]')).toBeVisible();
});
