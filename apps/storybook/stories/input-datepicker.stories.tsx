/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { InputDatepicker, InputDatepickerProps } from "@chepe/ui/src";

export default {
  title: "FormDateTime/InputDatepicker",
  component: InputDatepicker,
  tags: ["autodocs"],
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
