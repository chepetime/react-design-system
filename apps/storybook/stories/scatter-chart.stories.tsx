/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ScatterChart, ScatterChartProps } from "@chepe/ui/src/components/ScatterChart";

const meta: Meta<typeof ScatterChart> = {
  title: "Components/ScatterChart",
  component: ScatterChart,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ScatterChart>;

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
  render: (args: ScatterChartProps, { globals: { locale } }) => (
    <ScatterChart {...args}>{args.children || getCaptionForLocale(locale)}</ScatterChart>
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
