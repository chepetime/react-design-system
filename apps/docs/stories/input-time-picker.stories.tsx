/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { InputTimePicker, InputTimePickerProps } from "@chepe/ui/src";

export default {
  title: "FormDateTime/InputTimePicker",
  component: InputTimePicker,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: InputTimePickerProps) => <InputTimePicker />,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
