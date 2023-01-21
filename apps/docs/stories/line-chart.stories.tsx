import React from "react";
import { LineChart, LineChartProps } from "@chepe/ui/src";

export default {
  title: "Components/LineChart",
  component: LineChart,
};

export const Default = {
  render: (args: LineChartProps) => <LineChart>{args.children}</LineChart>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
