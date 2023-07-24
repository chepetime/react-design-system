/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  TimePicker,
  TimePickerProps,
} from "@chepe/ui/src/components/TimePicker";

const meta: Meta<typeof TimePicker> = {
  title: "Form/TimePicker",
  component: TimePicker,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TimePicker>;

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
  render: (args: TimePickerProps, { globals: { locale } }) => (
    <TimePicker {...args}>
      {args.children || getCaptionForLocale(locale)}
    </TimePicker>
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
