import { HomePage } from '../pages/HomePage';
import { TestCasesPage } from '../pages/TestCases';

const homePage = new HomePage();
const testCases = new TestCasesPage();

describe('Test Case 7: Verify Test Cases Page', () => {
  it('should navigate to Test Cases page successfully', () => {
    testCases.visitAndVerifyTestCasesIsVisible();
    testCases.verifyNumberOfTestCases('27');
  });
});
