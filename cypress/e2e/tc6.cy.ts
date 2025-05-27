import { ContactUsPage } from '../pages/contactUsPage';
import { HomePage } from '../pages/homePage';
import { Users } from '../elements/access-users/users';
import '../support/commands';

describe('Contact Us Form Test', () => {
  const contactUsPage = new ContactUsPage();
  const homePage = new HomePage();

  it('should submit contact form successfully', () => {
    homePage.visitAndVerifyHomePageIsVisible();
    contactUsPage.visitAndVerifyContactUsIsVisible();
    contactUsPage.populateContactUsForm(Users.DimitarDimitrovski);
    contactUsPage.uploadFile('cypress.png');
    contactUsPage.clickSubmit();
    contactUsPage.clickOkOnAlert();
    contactUsPage.verifySuccessMessage();
    homePage.visitAndVerifyHomePageIsVisible();
  });
});
