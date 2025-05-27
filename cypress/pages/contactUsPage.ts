import { UserCredentials } from '@/elements/access-users/userCredentials';
import { Users } from '@/elements/access-users/users';

export class ContactUsPage {
  visitAndVerifyContactUsIsVisible() {
    cy.visit('/contact_us');
    cy.url().should('eq', 'https://automationexercise.com/contact_us');
  }

  enterName(name: string) {
    cy.get('input[name="name"]').type(name);
  }

  enterEmail(email: string) {
    cy.get('input[name="email"]').type(email);
  }

  enterSubject(subject: string) {
    cy.get('input[name="subject"]').type(subject);
  }

  enterMessage(message: string) {
    cy.get('textarea[name="message"]').type(message);
  }

  uploadFile(filePath: string) {
    cy.get('input[name="upload_file"]').attachFile(filePath);
  }

  clickSubmit() {
    cy.get('input[name="submit"]').click();
  }

  clickOkOnAlert() {
    cy.on('window:alert', (text) => {
      expect(text).to.contains(
        'Success! Your details have been submitted successfully.',
      );
    });
  }

  verifySuccessMessage() {
    cy.get('.status alert-success, .status.alert-success, .status')
    .should('contain.text','Success! Your details have been submitted successfully.');
  }

  populateContactUsForm(user: UserCredentials) {
    this.enterName(user.name);
    this.enterEmail(user.email);
    this.enterSubject('Test Subject');
    this.enterMessage('This is a test message.');
  }
}
