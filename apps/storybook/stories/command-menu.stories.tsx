/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CommandMenu, CommandMenuProps } from "@chepe/ui/src/components/CommandMenu";

const meta: Meta<typeof CommandMenu> = {
  title: "Components/CommandMenu",
  component: CommandMenu,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CommandMenu>;

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
  render: (args: CommandMenuProps, { globals: { locale } }) => (
    <CommandMenu {...args}>{args.children || getCaptionForLocale(locale)}</CommandMenu>
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
