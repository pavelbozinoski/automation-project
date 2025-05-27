export class HomePage {
  visitAndVerifyHomePageIsVisible() {
    cy.visit('/');
    cy.url().should('eq', 'https://automationexercise.com/');
  }

  clickSignupLogin() {
    cy.get('a[href="/login"]').click();
  }

  clickLogout() {
    cy.get('a[href="/logout"]').click();
  }

  verifyLoggedInAs(name: string) {
    cy.get('a').contains(`Logged in as ${name}`).should('be.visible');
  }

  verifyLogoutIsVisible() {
    cy.get('a[href="/logout"]').should('be.visible');
  }

  verifyLogoutIsNotVisible() {
    cy.get('a[href="/logout"]').should('not.exist');
  }

  verifyDeleteAccountIsVisible() {
    cy.get('a[href="/delete_account"]').should('be.visible');
  }

  verifyDeleteAccountIsNotVisible() {
    cy.get('a[href="/delete_account"]').should('not.exist');
  }

  verifySignUpLoginIsNotVisible() {
    cy.get('a[href="/login"]').should('not.exist');
  }

  verifySignUpLoginIsVisible() {
    cy.get('a[href="/login"]').should('be.visible');
  }

  loginFormIsVisible() {
    cy.get('.login-form').should('be.visible');
  }

  clickDeleteAccount() {
    cy.get('a[href="/delete_account"]').click();
    cy.url().should('include', '/delete_account');
  }

  verifyAccountDeleted() {
    cy.contains('[data-qa="account-deleted"]', 'Account Deleted!').should(
      'be.visible');
  }

  clickFinalContinue() {
    cy.get('a[data-qa="continue-button"]').click();
  }

  addFirstProductToCart() {
    cy.get('.features_items')
      .first()
      .find('.product-image-wrapper')
      .first()
      .trigger('mouseover');

    cy.contains('Add to cart').click();
    cy.get('.modal-content .btn-success').contains('Continue Shopping').click();
  }
}

export const homePage = new HomePage();
