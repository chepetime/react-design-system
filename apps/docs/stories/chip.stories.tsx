import React from "react";
import { Chip, ChipProps } from "@chepe/ui/src";

export default {
  title: "Components/Chip",
  component: Chip,
};

export const Default = {
  render: (args: ChipProps) => <Chip>{args.children}</Chip>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
