// .storybook/test-runner.js

const { injectAxe, checkA11y, configureAxe } = require("axe-playwright");

const { getStoryContext } = require("@storybook/test-runner");

/*
 * See https://storybook.js.org/docs/7.0/react/writing-tests/test-runner#test-hook-api-experimental
 * to learn more about the test-runner hooks API.
 */
module.exports = {
  async preRender(page) {
    await injectAxe(page);
  },
  async postRender(page, context) {
    // Get the entire context of a story, including parameters, args, argTypes, etc.
    const storyContext = await getStoryContext(page, context);

    // Apply story-level a11y rules
    await configureAxe(page, {
      rules: storyContext.parameters?.a11y?.config?.rules,
    });

    await checkA11y(page, "#storybook-root", {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    });
  },
};
