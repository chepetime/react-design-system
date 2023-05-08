/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { InputHint, InputHintProps } from "@chepe/ui/src";

export default {
  title: "Form/InputHint",
  component: InputHint,
  argTypes: {
    type: {
      options: ["", "success", "warning", "error", "info"],
      control: { type: "radio" },
    },
  },
  tags: ["autodocs"],
};

export const Default = {
  render: (args: InputHintProps) => <InputHint {...args} />,
  args: {
    children: "Input Hint Message",
    type: "info",
  },
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
