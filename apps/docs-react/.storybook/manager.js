import { addons } from "@storybook/addons";
import { themes } from "@storybook/theming";
import logo from "./logo.svg";

addons.setConfig({
  theme: { ...themes.light, brandImage: logo },
});
