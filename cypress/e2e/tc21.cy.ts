import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
const productPage = new ProductPage();
const homePage = new HomePage();

describe('Test Case 21: Add review on product', () => {
  it('should submit a product review successfully', () => {
    homePage.visitAndVerifyHomePageIsVisible();
    productPage.clickProductsButton();
    productPage.clickFirstViewProductButton();
    productPage.enterReview('Pavel', 'pavel@example.com', 'Great product!');
    productPage.submitReview();
    productPage.verifyReviewSuccessMessage();
  });
});
