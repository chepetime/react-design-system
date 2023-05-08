/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { InputDateRangePicker, InputDateRangePickerProps } from "@chepe/ui/src";

export default {
  title: "FormDateTime/InputDateRangePicker",
  component: InputDateRangePicker,
  tags: ["autodocs"],
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
