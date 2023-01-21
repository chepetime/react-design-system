import React from "react";
import { InputCheckbox, InputCheckboxProps } from "@chepe/ui/src";

export default {
  title: "Components/InputCheckbox",
  component: InputCheckbox,
};

export const Default = {
  render: (args: InputCheckboxProps) => <InputCheckbox />,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
