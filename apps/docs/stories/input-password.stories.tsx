import React from "react";
import { InputPassword, InputPasswordProps } from "@chepe/ui/src";

export default {
  title: "Components/InputPassword",
  component: InputPassword,
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
