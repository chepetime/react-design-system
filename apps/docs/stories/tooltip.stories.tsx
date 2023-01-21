import React from "react";
import { Tooltip, TooltipProps } from "@chepe/ui/src";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
};

export const Default = {
  render: (args: TooltipProps) => <Tooltip>{args.children}</Tooltip>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
