/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { DropdownGroup, DropdownGroupProps } from "@chepe/ui/src/components/DropdownGroup";

const meta: Meta<typeof DropdownGroup> = {
  title: "Components/DropdownGroup",
  component: DropdownGroup,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DropdownGroup>;

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
  render: (args: DropdownGroupProps, { globals: { locale } }) => (
    <DropdownGroup {...args}>{args.children || getCaptionForLocale(locale)}</DropdownGroup>
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
