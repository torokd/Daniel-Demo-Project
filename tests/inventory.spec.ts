import {test, expect} from "@playwright/test";
import { LoginPage, InventoryPageObjects } from "../utils/index";

let loginPage: LoginPage;
let inventoryPage: InventoryPageObjects;

test.beforeEach(async ({page}) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPageObjects(page);
    await loginPage.goToMainPage();
    await loginPage.login(loginPage.variables.standardUserName);
});

test.only("Put single element to the cart", async () => {
    await inventoryPage.locators.addButton.first().click();
    await expect(inventoryPage.locators.removeButton.first()).toBeVisible();
});

test("Put multiple element to the cart", async () => {
    // 
    //
    //
    //
    //
    //
    //
    //
    //await expect(inventoryPage.locators.itemsNames).toHaveTexts(["Sauce Labs Backpack", "Sauce Labs Bike Light", "Sauce Labs Bolt T-Shirt", "Sauce Labs Fleece Jacket", "Sauce Labs Onesie", "Test.allTheThings() T-Shirt (Red)"]);
});

test("Removing elements from the cart before ordering them", async () => {
    // 
    //
    //
    //
    //
    //
    //
    //
    //await inventoryPage.sortItemsByName();
    //await expect(inventoryPage.locators.itemsNames).toHaveTexts(["Sauce Labs Backpack", "Sauce Labs Bike Light", "Sauce Labs Bolt T-Shirt", "Sauce Labs Fleece Jacket", "Sauce Labs Onesie", "Test.allTheThings() T-Shirt (Red)"]);
});

test("Order", async () => {
    // 
    //
    //
    //
    //
    //
    //
    //
    //await inventoryPage.sortItemsByName();
    //await expect(inventoryPage.locators.itemsNames).toHaveTexts(["Sauce Labs Backpack", "Sauce Labs Bike Light", "Sauce Labs Bolt T-Shirt", "Sauce Labs Fleece Jacket", "Sauce Labs Onesie", "Test.allTheThings() T-Shirt (Red)"]);
});