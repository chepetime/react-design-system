/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { ButtonGroup, ButtonGroupProps } from "@chepe/ui/src";

import { Button, ButtonDropdown, ButtonDropdownItem } from "@chepe/ui/src";

export default {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: ButtonGroupProps) => (
    <ButtonGroup>
      <Button>Click Me</Button>
      <ButtonDropdown label="Options" {...args}>
        <ButtonDropdownItem>Option 1</ButtonDropdownItem>
      </ButtonDropdown>
    </ButtonGroup>
  ),
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "https://www.figma.com/file/VgZTsIrH0uIGxTgAHFmlja/DLS-Tokens-(Demo)?node-id=4%3A2&t=1cIlIIV2dPyG7VdC-1",
    },
  },
};
