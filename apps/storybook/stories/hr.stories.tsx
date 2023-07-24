/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Hr, HrProps } from "@chepe/ui/src/components/Hr";

const meta: Meta<typeof Hr> = {
  title: "Typography/Hr",
  component: Hr,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Hr>;

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
  render: (args: HrProps, { globals: { locale } }) => (
    <Hr {...args}>{args.children || getCaptionForLocale(locale)}</Hr>
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
