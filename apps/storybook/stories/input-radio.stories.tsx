/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { InputRadio, InputRadioButtonProps } from "@chepe/ui/src";

export default {
  title: "Form/InputRadio",
  component: InputRadio,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: InputRadioButtonProps) => <InputRadio {...args} />,
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
