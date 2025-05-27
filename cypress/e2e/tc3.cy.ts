import { LoginPage } from '@/pages/LoginPage';
import { HomePage } from '../pages/homePage';
import { Users } from '../elements/access-users/users';

const loginPage = new LoginPage();
const homePage = new HomePage();

describe('Test Case 3: Login User with incorrect email and password', () => {
  it('should show error message when login with incorrect email and password', () => {
    homePage.visitAndVerifyHomePageIsVisible();
    homePage.clickSignupLogin();
    homePage.loginFormIsVisible();

    loginPage.loginWithUser(Users.NevalidenKorisnik);

    loginPage.verifyIncorrectCredentialsErrorMessage();
    homePage.verifySignUpLoginIsVisible();
    homePage.verifyLogoutIsNotVisible();
    homePage.verifyDeleteAccountIsNotVisible();
  });
});
