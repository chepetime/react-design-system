import React from "react";
import { Spacer, SpacerProps } from "@chepe/ui/src";

export default {
  title: "Components/Spacer",
  component: Spacer,
};

export const Default = {
  render: (args: SpacerProps) => <Spacer>{args.children}</Spacer>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
