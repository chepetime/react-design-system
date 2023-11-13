/** @type { import('@storybook/react-vite').StorybookConfig } */

import { mergeConfig } from "vite";
const config = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-storysource",
    "storybook-addon-designs",
    "@storybook/preset-scss",
    "@storybook/addon-coverage",
    "@storybook/addon-mdx-gfm",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  features: {
    storyStoreV7: true,
    buildStoriesJson: true,
    legacyDecoratorFileOrder: true,
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      define: {
        "process.env.NODE_DEBUG": false,
      },
      resolve: {
        alias: [
          {
            find: /^~(.*)$/,
            replacement: "$1",
          },
        ],
      },
    });
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
