import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/cartPage';

const homePage = new HomePage();
const cartPage = new CartPage();

describe('Test Case 17: Remove Products From Cart', () => {
  it('should remove product from the cart', () => {
    homePage.visitAndVerifyHomePageIsVisible();
    homePage.addFirstProductToCart();

    cartPage.clickCartButton();
    cartPage.verifyCartPageIsVisible();
    cartPage.removeFirstProduct();
    cartPage.verifyCartIsEmpty();
  });
});
