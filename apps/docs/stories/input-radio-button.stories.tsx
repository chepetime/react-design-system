import React from "react";
import { InputRadioButton, InputRadioButtonProps } from "@chepe/ui/src";

export default {
  title: "Components/InputRadioButton",
  component: InputRadioButton,
};

export const Default = {
  render: (args: InputRadioButtonProps) => <InputRadioButton />,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
