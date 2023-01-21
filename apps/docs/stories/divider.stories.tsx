import React from "react";
import { Divider, DividerProps } from "@chepe/ui/src";

export default {
  title: "Components/Divider",
  component: Divider,
};

export const Default = {
  render: (args: DividerProps) => <Divider>{args.children}</Divider>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
