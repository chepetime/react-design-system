/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { BarChart, BarChartProps } from "@chepe/ui/src";

export default {
  title: "Data/BarChart",
  component: BarChart,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: BarChartProps) => <BarChart>{args.children}</BarChart>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
