import React from "react";
import { ButtonDropdown, ButtonDropdownProps } from "@chepe/ui/src";

export default {
  title: "Components/ButtonDropdown",
  component: ButtonDropdown,
};

export const Default = {
  render: (args: ButtonDropdownProps) => (
    <ButtonDropdown>{args.children}</ButtonDropdown>
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
