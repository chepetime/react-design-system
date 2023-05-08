/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { InputCheckbox, InputCheckboxProps } from "@chepe/ui/src";

export default {
  title: "Form/InputCheckbox",
  component: InputCheckbox,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: InputCheckboxProps) => <InputCheckbox {...args} />,
  args: {
    name: "option_1",
    label: "Option 1",
  },
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
