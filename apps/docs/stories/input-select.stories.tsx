import React from "react";
import { InputSelect, InputSelectProps } from "@chepe/ui/src";

export default {
  title: "Components/InputSelect",
  component: InputSelect,
};

export const Default = {
  render: (args: InputSelectProps) => <InputSelect />,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
