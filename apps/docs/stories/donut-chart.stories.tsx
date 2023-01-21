import React from "react";
import { DonutChart, DonutChartProps } from "@chepe/ui/src";

export default {
  title: "Components/DonutChart",
  component: DonutChart,
};

export const Default = {
  render: (args: DonutChartProps) => <DonutChart>{args.children}</DonutChart>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
