/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Fieldsed, FieldsedProps } from "@chepe/ui/src/components/Fieldsed";

const meta: Meta<typeof Fieldsed> = {
  title: "Components/Fieldsed",
  component: Fieldsed,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Fieldsed>;

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
  render: (args: FieldsedProps, { globals: { locale } }) => (
    <Fieldsed {...args}>{args.children || getCaptionForLocale(locale)}</Fieldsed>
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
