import { test, expect } from "@playwright/test";
//import { LoginPage } from "../pages/loginPageObjects";
//import { GeneralHelperPage } from "../pages/generalHelperObjects";
import { LoginPage, GeneralHelperPage } from "../pages/pageHub";

let loginPage: LoginPage;
let generalHelperPage: GeneralHelperPage;
//https://parabank.parasoft.com/parabank/about.htm;jsessionid=4803A87F0082657195F8E9299912F569
//https://github.com/torokd/Daniel-Demo-Project

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  generalHelperPage = new GeneralHelperPage(page);
});

test.describe(
  "Login tests",
  {
    tag: ["@Regression", "@Sanity", "@Login"],
    annotation: { type: "valami", description: "leiras" },
  },
  () => {
    test.only("Successful login with standard user", async (page) => {
      // Megnyitja a fooldalt
      await loginPage.goToLoginPage();

      // Kitolti a usernamet, passwordot a megfelelo adatokkal es megnyomja a login gombot
      await loginPage.login(loginPage.standardUserName);

      await generalHelperPage.screenshot();

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
