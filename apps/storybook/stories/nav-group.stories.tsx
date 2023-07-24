/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { NavGroup, NavGroupProps } from "@chepe/ui/src/components/NavGroup";

const meta: Meta<typeof NavGroup> = {
  title: "Components/NavGroup",
  component: NavGroup,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NavGroup>;

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
  render: (args: NavGroupProps, { globals: { locale } }) => (
    <NavGroup {...args}>{args.children || getCaptionForLocale(locale)}</NavGroup>
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
