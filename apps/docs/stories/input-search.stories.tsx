import React from "react";
import { InputSearch, InputSearchProps } from "@chepe/ui/src";

export default {
  title: "Components/InputSearch",
  component: InputSearch,
};

export const Default = {
  render: (args: InputSearchProps) => <InputSearch />,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
