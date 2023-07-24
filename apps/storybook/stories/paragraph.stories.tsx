/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Paragraph, ParagraphProps } from "@chepe/ui/src/components/Paragraph";

const meta: Meta<typeof Paragraph> = {
  title: "Typography/Paragraph",
  component: Paragraph,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Paragraph>;

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
  render: (args: ParagraphProps, { globals: { locale } }) => (
    <Paragraph {...args}>
      {args.children || getCaptionForLocale(locale)}
    </Paragraph>
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
