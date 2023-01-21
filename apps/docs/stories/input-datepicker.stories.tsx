import React from "react";
import { InputDatepicker, InputDatepickerProps } from "@chepe/ui/src";

export default {
  title: "Components/InputDatepicker",
  component: InputDatepicker,
};

export const Default = {
  render: (args: InputDatepickerProps) => <InputDatepicker />,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
