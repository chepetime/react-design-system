/** @type { import('@storybook/react').Preview } */

import React from "react";

import { Preview } from "@storybook/react";
import { withColorScheme } from "../decorators/widthColorScheme";
import "./../styles/global.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      grid: {
        cellSize: 20,
        opacity: 0.5,
        cellAmount: 5,
        offsetX: 16, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
        offsetY: 16, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
      },
    },
  },

  decorators: [withColorScheme],
};

export default preview;

export const globalTypes = {
  scheme: {
    name: "Scheme",
    description: "Select light or dark theme",
    defaultValue: "both",
    toolbar: {
      icon: "mirror",
      items: [
        { value: "none", right: "🧼", title: "none" },
        { value: "light", right: "⚪️", title: "light" },
        { value: "dark", right: "⚫️", title: "dark" },
        { value: "both", right: "☯️", title: "both" },
        { value: "fireworks", right: "🎇", title: "fireworks" },
      ],
      dynamicTyle: true,
      showName: true,
    },
  },
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    defaultValue: "en",
    toolbar: {
      icon: "globe",
      items: [
        { value: "en", right: "🇺🇸", title: "English" },
        { value: "fr", right: "🇫🇷", title: "Français" },
        { value: "es", right: "🇪🇸", title: "Español" },
        { value: "zh", right: "🇨🇳", title: "中文" },
        { value: "kr", right: "🇰🇷", title: "한국어" },
      ],
    },
  },
};
