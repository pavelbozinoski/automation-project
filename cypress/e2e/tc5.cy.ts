import { HomePage } from '../pages/HomePage';
import { SignupPage } from '../pages/SignUpPage';
import { Users } from '../elements/access-users/users';
import { ensureAccountExists } from '../support/utils/accountUtils';

const homePage = new HomePage();
const signUpPage = new SignupPage();

describe('Test Case 5: Register User with existing email', () => {
  before(() => {
    ensureAccountExists(Users.PetarIlievski);
  });

  it('should show an error when trying to register with existing email', () => {
    homePage.visitAndVerifyHomePageIsVisible();
    homePage.clickSignupLogin();

    signUpPage.verifyNewUserSignupVisible();
    signUpPage.signupWithUser(Users.PetarIlievski);
    signUpPage.clickSignupButton();
    signUpPage.verifyEmailAlreadyExistsError();
  });
});
