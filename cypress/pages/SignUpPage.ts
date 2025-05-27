import { UserCredentials } from '../elements/access-users/userCredentials';

export class SignupPage {

  verifyNewUserSignupVisible() {
    cy.contains('New User Signup!')
    .should('be.visible');
  }

  enterName(name: string) {
    cy.get('input[data-qa="signup-name"]').type(name);
  }

  enterEmail(email: string) {
    cy.get('input[data-qa="signup-email"]').type(email);
  }

  clickSignupButton() {
    cy.intercept('POST', '**/signup').as('signupRequest'); 
    cy.get('button[data-qa="signup-button"]').click();
    cy.wait('@signupRequest');
  }

  verifyAccountInformationVisible() {
    cy.contains('Enter Account Information')
    .should('be.visible');
  }

  fillSignupForm(user: UserCredentials) {
    // Title
    cy.get('#id_gender1').check(); // Assuming Mr.

    // Personal info
    cy.get('#name')
    .should('have.value', user.name);
    cy.get('#email')
    .should('have.value', user.email);
    cy.get('#password').type(user.password);

    // Date of birth
    cy.get('#days').select(user.dob.day);
    cy.get('#months').select(user.dob.month);
    cy.get('#years').select(user.dob.year);

    // Checkboxes
    cy.get('#newsletter').check();
    cy.get('#optin').check();

    // Address info
    cy.get('#first_name').type(user.firstName);
    cy.get('#last_name').type(user.lastName);
    cy.get('#company').type(user.company);
    cy.get('#address1').type(user.address1);
    cy.get('#address2').type(user.address2);
    cy.get('#country').select(user.country);
    cy.get('#state').type(user.state);
    cy.get('#city').type(user.city);
    cy.get('#zipcode').type(user.zipcode);
    cy.get('#mobile_number').type(user.mobileNumber);
  }

   signupWithUser(user: UserCredentials) {
    this.enterName(user.name);
    this.enterEmail(user.email);
  }

  clickCreateAccountButton() {
    cy.get('button[data-qa="create-account"]').click();
    cy.url()
    .should('include', '/account_created');
  }

  verifyAccountCreated() {
    cy.get('[data-qa="account-created"]')
    .should('contain.text', 'Account Created!');
  }

  verifyEmailAlreadyExistsError() {
  cy.get('.signup-form').find('p')
  .should('have.text', 'Email Address already exist!')
}

  clickContinueButton() {
    cy.get('a[data-qa="continue-button"]').click();
  }
}

export const signupPage = new SignupPage();