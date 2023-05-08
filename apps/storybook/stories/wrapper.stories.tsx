/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Wrapper, WrapperProps } from "@chepe/ui/src";

export default {
  title: "Layout/Wrapper",
  component: Wrapper,
  tags: ["autodocs"],
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
