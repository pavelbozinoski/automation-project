
# Cypress Automation Project 🚀

This is a simple Cypress + TypeScript automation project using Page Object Model. It's connected with GitHub Actions to run tests automatically when I push or open a pull request.

---

## 🔧 Tech Stack

- Cypress
- TypeScript
- GitHub Actions (CI)

---

## 📁 Project Structure

```
cypress/
  e2e/            -> Test files
  support/        -> Setup and commands
  fixtures/       -> Test data

pages/            -> Page Object functions
elements/         -> Element locators
.github/workflows/-> GitHub CI config

cypress.config.ts
tsconfig.json
package.json
```

---

## ▶️ How to Run

Make sure you have Node.js and NPM installed.

### Install dependencies:

```bash
npm install
```

### Run tests in the terminal:

```bash
npx cypress run
```

### Run tests in Cypress GUI:

```bash
npx cypress open
```

---

## 🔁 GitHub Actions

The tests run automatically in GitHub when I push to `main` or `dev`. The workflow file is at:

```
.github/workflows/run-tests.yml
```

---

## 👤 Test Users

User test data is stored in:

```
elements/access-users/users.ts
```

Example:
```ts
{
  name: 'Test User',
  email: 'test@example.com',
  password: '123456'
}
```

---

## ✍️ Author

Made by Pavel Bozinoski 🙂
