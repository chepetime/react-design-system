/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  DonutChart,
  DonutChartProps,
} from "@chepe/ui/src/components/DonutChart";

const meta: Meta<typeof DonutChart> = {
  title: "Chart/DonutChart",
  component: DonutChart,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DonutChart>;

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
  render: (args: DonutChartProps, { globals: { locale } }) => (
    <DonutChart {...args}>
      {args.children || getCaptionForLocale(locale)}
    </DonutChart>
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
