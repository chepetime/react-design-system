import React from "react";
import { InputTextarea, InputTextareaProps } from "@chepe/ui/src";

export default {
  title: "Components/InputTextarea",
  component: InputTextarea,
};

export const Default = {
  render: (args: InputTextareaProps) => <InputTextarea />,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
