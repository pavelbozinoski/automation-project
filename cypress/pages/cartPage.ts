export class CartPage {
  clickCartButton() {
    cy.get('.nav').find('a[href="/view_cart"]').click();
  }

  verifyCartPageIsVisible() {
    cy.url().should('eq', 'https://automationexercise.com/view_cart');
  }

  removeFirstProduct() {
    cy.get('.cart_quantity_delete').first().click();
  }

  verifyCartIsEmpty() {
    cy.get('[id="cart_info_table"]').find('tr').should('have.length', '1');
  }
}
