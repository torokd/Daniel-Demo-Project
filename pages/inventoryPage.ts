import { type Locator, type Page } from "@playwright/test";

export class InventoryPage {
  readonly page: Page;

  readonly locators: {
    orderingDropdown: Locator;
    itemContainer: Locator;
    itemPicture: Locator;
    itemName: Locator;
    itemDescription: Locator;
    itemPrice: Locator;
    addButton: Locator;
    removeButton: Locator;
  };


  constructor(page: Page) {
    this.page = page;

    this.locators = {
      orderingDropdown: page.locator('.product_sort_container'),
      itemContainer: page.locator('.inventory_list'),
      itemPicture: page.locator('.inventory_item_img'),
      itemName: page.locator('.inventory_item_name'),
      itemDescription: page.locator('.inventory_item_desc'),
      itemPrice: page.locator('.inventory_item_price'),
      addButton: page.getByText('ADD TO CART'),
      removeButton: page.getByText('REMOVE'),
    };
  };

  async orderAsc(): Promise<void> {
    await this.locators.orderingDropdown.selectOption({ label: 'Name (A to Z)' });
  };

  async orderDesc(): Promise<void> {
    await this.locators.orderingDropdown.selectOption({ label: 'Name (Z to A)' });
  };

  async orderIncreasing(): Promise<void> {
    await this.locators.orderingDropdown.selectOption({ label: 'Price (low to high)' });
  };

  async orderDecreasing(): Promise<void> {
    await this.locators.orderingDropdown.selectOption({ label: 'Price (high to low)' });
  };

  // async addItemToCart(): Promise<void> {
  //   //TODO: Add logic to add item to cart
  //   await this.locators.itemAddToCartButton.click();
  // };

  // async removeItemFromCart(): Promise<void> {
  //   //TODO: Add logic to remove item to cart
  //   await this.locators.itemRemoveFromCartButton.click();
  // };

  async goToCart(): Promise<void> {
    await this.page.click('text=Shopping Cart');
  };
};
