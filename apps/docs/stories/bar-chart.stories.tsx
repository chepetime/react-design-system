import React from "react";
import { BarChart, BarChartProps } from "@chepe/ui/src";

export default {
  title: "Components/BarChart",
  component: BarChart,
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
