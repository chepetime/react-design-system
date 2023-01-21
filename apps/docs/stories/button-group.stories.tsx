import React from "react";
import { ButtonGroup, ButtonGroupProps } from "@chepe/ui/src";

export default {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
};

export const Default = {
  render: (args: ButtonGroupProps) => (
    <ButtonGroup>{args.children}</ButtonGroup>
  ),
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
