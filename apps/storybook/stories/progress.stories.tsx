/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Progress, ProgressProps } from "@chepe/ui/src";

export default {
  title: "Components/Progress",
  component: Progress,
  argTypes: {},
  tags: ["autodocs"],
};

export const Default = {
  render: (args: ProgressProps) => <Progress {...args} />,
  args: {
    value: 50,
  },
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
