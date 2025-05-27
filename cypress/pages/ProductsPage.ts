export class ProductsPage {
  visitAndVerifyHomePageIsVisible() {
    cy.visit('/');
    cy.url().should('eq', 'https://automationexercise.com/');
  }

  clickProductsButton() {
    cy.contains('a', 'Products').click();
  }

  verifyAllProductsPage() {
    cy.get('.title').should('contain.text', 'All Products');
    cy.url().should('include', '/products');
  }

  enterSearchProduct(productName: string) {
    cy.get('#search_product').type(productName);
  }

  clickSearchButton() {
    cy.get('#submit_search').click();
  }

  verifySearchedProductsHeader() {
    cy.get('.features_items > h2').should('have.text', 'Searched Products');
  }

  verifyNumberOfProductsPresented(numberOfProducts: string) {
    cy.get('.features_items')
      .find('.col-sm-4')
      .should('have.length', numberOfProducts);
  }

  verifyProductName(productName: string) {
    cy.get('.features_items')
      .find('.col-sm-4')
      .find('.product-overlay')
      .find('p')
      .contains(productName);
  }

  verifyProductPrice(productPrice: string) {
    cy.get('.features_items')
      .find('.col-sm-4')
      .find('.product-overlay')
      .find('p')
      .contains(productPrice);
  }
}
