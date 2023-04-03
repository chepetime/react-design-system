/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { LineChart, LineChartProps } from "@chepe/ui/src";

export default {
  title: "Data/LineChart",
  component: LineChart,
  tags: ["autodocs"],
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
