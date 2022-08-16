const darkMode = {
  darkClass: "dark",
  lightClass: "light",
  classTarget: "body",
  stylePreview: true,
  current: "light",
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
};
