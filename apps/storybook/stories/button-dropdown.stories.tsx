/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ButtonDropdown, ButtonDropdownProps } from "@chepe/ui/src/components/ButtonDropdown";

const meta: Meta<typeof ButtonDropdown> = {
  title: "Components/ButtonDropdown",
  component: ButtonDropdown,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ButtonDropdown>;

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
  render: (args: ButtonDropdownProps, { globals: { locale } }) => (
    <ButtonDropdown {...args}>{args.children || getCaptionForLocale(locale)}</ButtonDropdown>
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
