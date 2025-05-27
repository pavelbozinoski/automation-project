export class TestCasesPage {
  visitAndVerifyTestCasesIsVisible() {
    cy.visit('https://www.automationexercise.com/test_cases');
    cy.url().should('eq', 'https://www.automationexercise.com/test_cases');
  }

  verifyNumberOfTestCases(numberOfTestCases: string) {
    cy.get('.panel-group').should('have.length', numberOfTestCases);
  }
}
