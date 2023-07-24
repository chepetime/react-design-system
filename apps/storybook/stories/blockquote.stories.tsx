/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Blockquote,
  BlockquoteProps,
} from "@chepe/ui/src/components/Blockquote";

const meta: Meta<typeof Blockquote> = {
  title: "Typography/Blockquote",
  component: Blockquote,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Blockquote>;

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
  render: (args: BlockquoteProps, { globals: { locale } }) => (
    <Blockquote {...args}>
      {args.children || getCaptionForLocale(locale)}
    </Blockquote>
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
