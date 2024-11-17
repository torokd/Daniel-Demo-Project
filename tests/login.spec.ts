import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPageObjects";
import { ValamiMasikPage } from "../pages/valamiMasikPage";

let loginPage: LoginPage;
let valamiMasikPage: ValamiMasikPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  valamiMasikPage = new ValamiMasikPage(page);
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
      await loginPage.login(loginPage.credentials.standardUserName);

      // Ravizsgal, hogy megvan-e a belepes utani screenen egy icon
      await expect(loginPage.locators.icons.hamburgerMenuIcon).toBeVisible();
    });

    test("Unsuccessful login with blocked user", async () => {
      await loginPage.goToLoginPage();

      await loginPage.login(loginPage.credentials.blockedUserName);

      await expect(
        loginPage.locators.errorMessages.loginErrorMessage
      ).toHaveText(loginPage.locators.texts.loginError.EN);
    });
  }
);
