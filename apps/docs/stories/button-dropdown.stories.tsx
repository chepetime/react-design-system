/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import {
  ButtonDropdown,
  ButtonDropdownItem,
  ButtonDropdownProps,
} from "@chepe/ui/src";

export default {
  title: "Components/ButtonDropdown",
  component: ButtonDropdown,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: ButtonDropdownProps) => (
    <ButtonDropdown {...args}>
      <ButtonDropdownItem>Option 1</ButtonDropdownItem>
      <ButtonDropdownItem>Option 2</ButtonDropdownItem>
      <ButtonDropdownItem>Option 3</ButtonDropdownItem>
      <ButtonDropdownItem>Option 4</ButtonDropdownItem>
      <ButtonDropdownItem>Option 5</ButtonDropdownItem>
    </ButtonDropdown>
  ),
  args: {
    label: "Click Me",
  },
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
