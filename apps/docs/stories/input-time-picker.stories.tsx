import React from "react";
import { InputTimePicker, InputTimePickerProps } from "@chepe/ui/src";

export default {
  title: "Components/InputTimePicker",
  component: InputTimePicker,
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
