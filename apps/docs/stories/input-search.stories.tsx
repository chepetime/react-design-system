/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { InputSearch, InputSearchProps } from "@chepe/ui/src";

export default {
  title: "Form/InputSearch",
  component: InputSearch,
  tags: ["autodocs"],
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
