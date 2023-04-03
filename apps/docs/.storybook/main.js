/** @type { import('@storybook/react-vite').StorybookConfig } */

import { mergeConfig } from "vite";

const config = {
  stories: ["./../stories/**/*.mdx", "./../stories/**/*.stories.tsx"],
  addons: [
    {
      name: "@storybook/addon-mdx-gfm",
    },
    {
      name: "@storybook/addon-links",
    },
    {
      name: "@storybook/addon-essentials",
    },
    {
      name: "@storybook/addon-a11y",
    },
    {
      name: "@storybook/addon-storysource",
    },
    {
      name: "storybook-addon-designs",
    },
    {
      name: "storybook-dark-mode",
    },
    {
      name: "@storybook/preset-scss",
    },
    {
      name: "@storybook/addon-coverage",
    },
    "@storybook/addon-mdx-gfm",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  features: { storyStoreV7: true, buildStoriesJson: true },
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
    autodocs: true,
  },
};
export default config;
