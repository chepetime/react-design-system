import React from "react";
import { InputDateRangePicker, InputDateRangePickerProps } from "@chepe/ui/src";

export default {
  title: "Components/InputDateRangePicker",
  component: InputDateRangePicker,
};

export const Default = {
  render: (args: InputDateRangePickerProps) => <InputDateRangePicker />,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
