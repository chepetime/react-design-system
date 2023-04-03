/** @type { import('@storybook/react').Preview } */
import React from "react";

import { themes } from "@storybook/theming";
import logo from "./logos/logo.svg";
import logoDark from "./logos/logo-dark.svg";
// import { DocsContainer } from "./DocsContainer";

const brandTitle = "Chepe Design System";

const darkMode = {
  darkClass: "dark",
  lightClass: "light",
  classTarget: "body",
  stylePreview: true,
  current: "light",
  light: {
    ...themes.normal,

    brandTitle,
    brandImage: logo,
  },
  dark: {
    ...themes.dark,
    brandTitle,
    brandImage: logoDark,
  },
};

const preview = {
  parameters: {
    backgrounds: {},
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode,
    docs: {},
  },
};

export default preview;
