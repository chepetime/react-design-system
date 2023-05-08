/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { InputPassword, InputPasswordProps } from "@chepe/ui/src";

export default {
  title: "Form/InputPassword",
  component: InputPassword,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: InputPasswordProps) => <InputPassword />,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
