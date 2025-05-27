import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com',
    includeShadowDom: false, 
    supportFile: false,
    watchForFileChanges: false,
    specPattern: 'cypress/e2e/**/*.cy.ts',
  }
});