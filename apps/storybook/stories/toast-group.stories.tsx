/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ToastGroup, ToastGroupProps } from "@chepe/ui/src/components/ToastGroup";

const meta: Meta<typeof ToastGroup> = {
  title: "Components/ToastGroup",
  component: ToastGroup,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ToastGroup>;

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
  render: (args: ToastGroupProps, { globals: { locale } }) => (
    <ToastGroup {...args}>{args.children || getCaptionForLocale(locale)}</ToastGroup>
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
