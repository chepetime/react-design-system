import React from "react";
import { ScatterChart, ScatterChartProps } from "@chepe/ui/src";

export default {
  title: "Components/ScatterChart",
  component: ScatterChart,
};

export const Default = {
  render: (args: ScatterChartProps) => (
    <ScatterChart>{args.children}</ScatterChart>
  ),
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
