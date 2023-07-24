/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { DropdownItem, DropdownItemProps } from "@chepe/ui/src/components/DropdownItem";

const meta: Meta<typeof DropdownItem> = {
  title: "Components/DropdownItem",
  component: DropdownItem,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DropdownItem>;

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
  render: (args: DropdownItemProps, { globals: { locale } }) => (
    <DropdownItem {...args}>{args.children || getCaptionForLocale(locale)}</DropdownItem>
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
