/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { ScatterChart, ScatterChartProps } from "@chepe/ui/src";

export default {
  title: "Data/ScatterChart",
  component: ScatterChart,
  tags: ["autodocs"],
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
