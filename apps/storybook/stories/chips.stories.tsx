/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Chips, ChipsProps } from "@chepe/ui/src/components/Chips";

const meta: Meta<typeof Chips> = {
  title: "Components/Chips",
  component: Chips,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Chips>;

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
  render: (args: ChipsProps, { globals: { locale } }) => (
    <Chips {...args}>{args.children || getCaptionForLocale(locale)}</Chips>
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
