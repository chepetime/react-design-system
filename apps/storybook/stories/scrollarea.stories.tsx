/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Scrollarea, ScrollareaProps } from "@chepe/ui/src/components/Scrollarea";

const meta: Meta<typeof Scrollarea> = {
  title: "Components/Scrollarea",
  component: Scrollarea,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Scrollarea>;

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
  render: (args: ScrollareaProps, { globals: { locale } }) => (
    <Scrollarea {...args}>{args.children || getCaptionForLocale(locale)}</Scrollarea>
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
