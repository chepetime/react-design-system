/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { LineChart, LineChartProps } from "@chepe/ui/src/components/LineChart";

const meta: Meta<typeof LineChart> = {
  title: "Chart/LineChart",
  component: LineChart,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LineChart>;

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
  render: (args: LineChartProps, { globals: { locale } }) => (
    <LineChart {...args}>
      {args.children || getCaptionForLocale(locale)}
    </LineChart>
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
