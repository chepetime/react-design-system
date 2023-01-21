import React from "react";
import { InputHint, InputHintProps } from "@chepe/ui/src";

export default {
  title: "Components/InputHint",
  component: InputHint,
};

export const Default = {
  render: (args: InputHintProps) => <InputHint>{args.children}</InputHint>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
