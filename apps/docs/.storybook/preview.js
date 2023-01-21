import React from "react";
import { themes } from "@storybook/theming";
import logo from "./logos/logo-light.svg";
import logoDark from "./logos/logo-dark.svg";
import { DocsContainer } from "./DocsContainer";

const brandTitle = "chepe-dls";

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

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode,
  docs: {
    container: DocsContainer,
  },
};
