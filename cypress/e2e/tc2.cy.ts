import { HomePage } from '@/pages/HomePage';
import { SignupPage } from '@/pages/SignUpPage';
import { Users } from '../elements/access-users/users';
import { LoginPage } from '@/pages/LoginPage';
import { ensureAccountExists } from '@/support/utils/accountUtils';

const signUpPage = new SignupPage();
const loginPage = new LoginPage();
const homePage = new HomePage();

describe('Test Case 2: Login User with correct email and password', () => {
  before(() => {
    ensureAccountExists(Users.MarijaStojanovska);
  });

  it('should log in user with correct credentials and delete account', () => {
    homePage.visitAndVerifyHomePageIsVisible;
    homePage.clickSignupLogin();
    homePage.loginFormIsVisible();

    loginPage.loginWithUser(Users.MarijaStojanovska);
    homePage.verifyLogoutIsVisible();
    homePage.verifySignUpLoginIsNotVisible();

    homePage.verifyDeleteAccountIsVisible();
    homePage.clickDeleteAccount();
    homePage.verifyAccountDeleted();
    homePage.verifySignUpLoginIsVisible();
  });
});
