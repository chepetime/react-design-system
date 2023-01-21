import React from "react";
import { Caption, CaptionProps } from "@chepe/ui/src";

export default {
  title: "Components/Caption",
  component: Caption,
};

export const Default = {
  render: (args: CaptionProps) => <Caption>{args.children}</Caption>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
