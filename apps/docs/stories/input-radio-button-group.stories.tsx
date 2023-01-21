import React from "react";
import {
  InputRadioButtonGroup,
  InputRadioButtonGroupProps,
} from "@chepe/ui/src";

export default {
  title: "Components/InputRadioButtonGroup",
  component: InputRadioButtonGroup,
};

export const Default = {
  render: (args: InputRadioButtonGroupProps) => <InputRadioButtonGroup />,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
