/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { DonutChart, DonutChartProps } from "@chepe/ui/src";

export default {
  title: "Data/DonutChart",
  component: DonutChart,
  tags: ["autodocs"],
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
