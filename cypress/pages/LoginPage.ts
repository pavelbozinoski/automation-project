import { UserCredentials } from '../elements/access-users/userCredentials';

export class LoginPage {
  visit() {
    cy.visit('/login');
  }

  enterEmail(email: string) {
    cy.get('input[data-qa="login-email"]').clear().type(email);
  }

  enterPassword(password: string) {
    cy.get('input[data-qa="login-password"]').clear().type(password);
  }

  clickLoginButton() {
    cy.get('button[data-qa="login-button"]').click();
  }

  loginWithUser(user: UserCredentials) {
    this.visit();
    this.enterEmail(user.email);
    this.enterPassword(user.password);
    this.clickLoginButton();
  }

  verifyLoginToYourAccountIsVisible() {
    cy.get('h2:contains("Login to your account")').should('be.visible');
  }

  verifyIncorrectCredentialsErrorMessage() {
    cy.contains('p', 'Your email or password is incorrect!')
      .should('be.visible')
      .should('have.css', 'color', 'rgb(255, 0, 0)');
  }
}
