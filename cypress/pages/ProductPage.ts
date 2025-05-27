export class ProductPage {
  clickProductsButton() {
    cy.get('a[href="/products"]').click();
  }

  clickFirstViewProductButton() {
    cy.get('a[href="/product_details/1"]').click();
  }

  enterReview(name: string, email: string, review: string) {
    cy.get('#name').type(name);
    cy.get('#email').type(email);
    cy.get('#review').type(review);
  }

  submitReview() {
    cy.get('#button-review').click();
  }

  verifyReviewSuccessMessage() {
    cy.get('.alert-success').should(
      'contain.text',
      'Thank you for your review.',
    );
  }
}
