/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { NavToggle, NavToggleProps } from "@chepe/ui/src/components/NavToggle";

const meta: Meta<typeof NavToggle> = {
  title: "Components/NavToggle",
  component: NavToggle,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NavToggle>;

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
  render: (args: NavToggleProps, { globals: { locale } }) => (
    <NavToggle {...args}>{args.children || getCaptionForLocale(locale)}</NavToggle>
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
