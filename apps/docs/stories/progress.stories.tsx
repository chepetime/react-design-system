import React from "react";
import { Progress, ProgressProps } from "@chepe/ui/src";

export default {
  title: "Components/Progress",
  component: Progress,
};

export const Default = {
  render: (args: ProgressProps) => <Progress>{args.children}</Progress>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
