/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { [componentName](pascalCase), [componentName](pascalCase)Props } from "@chepe/ui/src/components/[componentName](pascalCase)";

const meta: Meta<typeof [componentName](pascalCase)> = {
  title: "Components/[componentName](pascalCase)",
  component: [componentName](pascalCase),
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof [componentName](pascalCase)>;

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "es":
      return "¡Hola!";
    case "fr":
      return "Bonjour!";
    case "kr":
      return "안녕하세요!";
    case "zh":
      return "你好!";
    default:
      return "Hello!";
  }
};

export const Default: Story = {
  render: (args: [componentName](pascalCase)Props, { globals: { locale } }) => (
    <[componentName](pascalCase) {...args}>{args.children || getCaptionForLocale(locale)}</[componentName](pascalCase)>
  ),
  args: {
    children: "",
  },
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
