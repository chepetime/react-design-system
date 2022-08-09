const path = require("path");

const stories = ["../stories/**/*.stories.mdx", "../stories/**/*.stories.tsx"];

const addons = [
  { name: "@storybook/addon-links" },
  { name: "@storybook/addon-essentials" },
  { name: "@storybook/addon-docs" },
  { name: "@storybook/addon-a11y" },
  { name: "@storybook/addon-storysource" },
  { name: "storybook-addon-designs" },
  { name: "storybook-addon-pseudo-states" },
  {
    name: "storybook-addon-turbo-build",
    options: {
      optimizationLevel: 2,
    },
  },
  { name: "storybook-dark-mode" },
];

module.exports = {
  stories,
  addons,
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return {
      ...config,
      resolve: {
        alias: [
          {
            find: "ui",
            replacement: path.resolve(__dirname, "../../../packages/ui/"),
          },
        ],
      },
    };
  },
};
