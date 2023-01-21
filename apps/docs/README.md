# Storybook Docs

Storybook App for Design Systems development and documentation.

## Getting started

## Tests

### Test runner

Storybook test runner turns all of your stories into executable tests. It is powered by Jest and Playwright.

Run this test with **two terminals**. In the first terminal start your Storybook with:

```sh
# Terminal 1
npm run storybook
```

In the second one run the test-runner with:

```sh
# Terminal 2
npm run test-storybook
```

### Visual Tests

Visual tests, also called visual regression tests, catch bugs in UI appearance. They work by taking screenshots of every story and comparing them commit-to-commit to identify changes.

Ideal for verifying what the user sees: layout, color, size, and contrast. Storybook is a fantastic tool for visual testing because every story is essentially a test specification. Any time you write or update a story, you get a spec for free.

Chromatic is a cloud service built for Storybook. It allows you to run visual tests with zero-config.

```sh
npm run chromatic
```

### Accessibility Tests

Accessibility is the practice of making websites inclusive to all. That means supporting requirements such as: keyboard navigation, screen reader support, touch-friendly, usable color contrast, reduced motion, and zoom support.

Accessibility tests audit the rendered DOM against a set of heuristics based on WCAG rules and other industry-accepted best practices. They act as the first line of QA to catch blatant accessibility violations.

Storybook's a11y addon runs Axe on the selected story. Allowing you to catch and fix accessibility issues during development.

### Interaction Tests

### Snapshots
