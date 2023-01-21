import React from "react";
import { Label, LabelProps } from "@chepe/ui/src";

export default {
  title: "Components/Label",
  component: Label,
};

export const Default = {
  render: (args: LabelProps) => <Label>{args.children}</Label>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
