import React from "react";
import { Icon, IconProps } from "@chepe/ui/src";

export default {
  title: "Components/Icon",
  component: Icon,
};

export const Default = {
  render: (args: IconProps) => <Icon>{args.children}</Icon>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
