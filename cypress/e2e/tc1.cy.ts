import { HomePage } from '@/pages/homePage';
import { SignupPage } from '@/pages/SignUpPage';
import { Users } from '../elements/access-users/users';
import { LoginPage } from '@/pages/LoginPage';

const signUpPage = new SignupPage();
const loginPage = new LoginPage();
const homePage = new HomePage();

describe('Test Case 1: Register User', () => {
  it('should successfully register, login and delete a user', () => {
    const user = Users.randomUser;

    homePage.visitAndVerifyHomePageIsVisible();
    homePage.clickSignupLogin();

    signUpPage.verifyNewUserSignupVisible();
    signUpPage.signupWithUser(user)
    signUpPage.clickSignupButton();
    
    signUpPage.verifyAccountInformationVisible();

    signUpPage.fillSignupForm(user);
    signUpPage.clickCreateAccountButton();

    signUpPage.verifyAccountCreated(); 
    signUpPage.clickContinueButton();

    homePage.verifyLoggedInAs(user.name);
    homePage.verifySignUpLoginIsNotVisible();
    homePage.verifyDeleteAccountIsVisible();
    homePage.verifyLogoutIsVisible();

    homePage.clickDeleteAccount();
    homePage.verifyAccountDeleted();
    
    homePage.verifyLogoutIsNotVisible();
    homePage.verifyDeleteAccountIsNotVisible();
    homePage.verifySignUpLoginIsVisible();
    homePage.clickFinalContinue();
  });
});