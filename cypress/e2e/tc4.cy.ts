import { HomePage } from '@/pages/HomePage';
import { LoginPage } from '@/pages/LoginPage';
import { Users } from '../elements/access-users/users';
import { SignupPage } from '@/pages/SignUpPage';
import { ensureAccountExists } from '@/support/utils/accountUtils';

const homePage = new HomePage();
const loginPage = new LoginPage();
const signUpPage = new SignupPage();

describe('Test Case 4: Logout User', () => {
  before(() => {
    ensureAccountExists(Users.PetarIlievski);
  });

  it('should log in and log out successfully', () => {
    homePage.visitAndVerifyHomePageIsVisible();

    homePage.clickSignupLogin();

    loginPage.verifyLoginToYourAccountIsVisible();
    loginPage.loginWithUser(Users.PetarIlievski);

    homePage.verifyLoggedInAs(Users.PetarIlievski.name);
    homePage.verifyLogoutIsVisible();
    homePage.verifySignUpLoginIsNotVisible();
    homePage.verifyDeleteAccountIsVisible();
    homePage.clickLogout();

    homePage.verifyDeleteAccountIsNotVisible();
    homePage.verifyLogoutIsNotVisible();
    homePage.verifySignUpLoginIsVisible();
  });
});
