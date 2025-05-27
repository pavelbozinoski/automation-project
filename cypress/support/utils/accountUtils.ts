import { HomePage } from '@/pages/HomePage';
import { SignupPage } from '@/pages/SignUpPage';
import { UserCredentials } from '@/elements/access-users/userCredentials';

const homePage = new HomePage();
const signUpPage = new SignupPage();

export function ensureAccountExists(user: UserCredentials) {
  homePage.visitAndVerifyHomePageIsVisible();
  homePage.clickSignupLogin();

  signUpPage.verifyNewUserSignupVisible();
  signUpPage.signupWithUser(user);
  signUpPage.clickSignupButton();

  cy.get('body').then(($body) => {
    if ($body.text().includes('Email Address already exist!')) {
      cy.log('Account already exists');
    } else {
      signUpPage.fillSignupForm(user);
      signUpPage.clickCreateAccountButton();
      signUpPage.verifyAccountCreated();
      signUpPage.clickContinueButton();
      homePage.verifyLoggedInAs(user.name);
      homePage.clickLogout();
    }
  });
}
