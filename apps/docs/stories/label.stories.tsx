/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Label, LabelProps } from "@chepe/ui/src";

export default {
  title: "Form/Label",
  component: Label,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: LabelProps) => <Label {...args} />,
  args: {
    children: "Label",
  },
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
