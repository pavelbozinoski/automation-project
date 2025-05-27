import { HomePage } from '@/pages/homePage';
import { ProductsPage } from '@/pages/ProductsPage';

const productsPage = new ProductsPage();
const homePage = new HomePage();

describe('Test Case 9: Search Product', () => {
  it('should search for a product and display relevant results', () => {
    homePage.visitAndVerifyHomePageIsVisible();

    productsPage.clickProductsButton();
    productsPage.verifyAllProductsPage();

    const productName = 'Pure Cotton V-Neck T-Shirt';
    productsPage.enterSearchProduct(productName);
    productsPage.clickSearchButton();
    productsPage.verifyNumberOfProductsPresented('1');
    productsPage.verifyProductName('Pure Cotton V-Neck T-Shirt');
  });
});
