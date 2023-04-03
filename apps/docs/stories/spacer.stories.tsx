/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Spacer, SpacerProps } from "@chepe/ui/src";

export default {
  title: "Layout/Spacer",
  component: Spacer,
  tags: ["autodocs"],
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
