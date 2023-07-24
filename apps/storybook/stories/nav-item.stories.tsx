/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { NavItem, NavItemProps } from "@chepe/ui/src/components/NavItem";

const meta: Meta<typeof NavItem> = {
  title: "Components/NavItem",
  component: NavItem,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NavItem>;

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
  render: (args: NavItemProps, { globals: { locale } }) => (
    <NavItem {...args}>{args.children || getCaptionForLocale(locale)}</NavItem>
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
