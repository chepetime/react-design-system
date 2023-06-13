/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { InputPassword, InputPasswordProps } from "@chepe/ui/src/components/InputPassword";

const meta: Meta<typeof InputPassword> = {
  title: "Components/InputPassword",
  component: InputPassword,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InputPassword>;

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
  render: (args: InputPasswordProps, { globals: { locale } }) => (
    <InputPassword {...args}>{args.children || getCaptionForLocale(locale)}</InputPassword>
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
