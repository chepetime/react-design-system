/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Range, RangeProps } from "@chepe/ui/src/components/Range";

const meta: Meta<typeof Range> = {
  title: "Form/Range",
  component: Range,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Range>;

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
  render: (args: RangeProps, { globals: { locale } }) => (
    <Range {...args}>{args.children || getCaptionForLocale(locale)}</Range>
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
