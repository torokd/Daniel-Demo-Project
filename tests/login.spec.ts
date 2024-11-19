import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPageObjects";

let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
});

test.describe(
  "Login tests",
  {
    tag: ["@Regression", "@Sanity", "@Login"],
    annotation: { type: "valami", description: "leiras" },
  },
  () => {
    test("Successful login with standard user", async () => {
      // Megnyitja a fooldalt
      await loginPage.goToLoginPage();

      // Kitolti a usernamet, passwordot a megfelelo adatokkal es megnyomja a login gombot
      await loginPage.login(loginPage.standardUserName);

      // Ravizsgal, hogy megvan-e a belepes utani screenen egy icon
      await expect(loginPage.locators.hamburgerMenuIcon).toBeVisible();
    });

    test("Unsuccessful login with blocked user", async () => {
      await loginPage.goToLoginPage();

      await loginPage.login(loginPage.blockedUserName);

      await expect(
        loginPage.locators.loginErrorMessage
      ).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    });
  }
);
