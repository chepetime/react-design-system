import React from "react";
import { Wrapper, WrapperProps } from "@chepe/ui/src";

export default {
  title: "Components/Wrapper",
  component: Wrapper,
};

export const Default = {
  render: (args: WrapperProps) => <Wrapper>{args.children}</Wrapper>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
