import React from "react";
import { InputSwitch, InputSwitchProps } from "@chepe/ui/src";
import { Label } from "@chepe/ui/src";

export default {
  title: "Components/InputSwitch",
  component: InputSwitch,
};

export const Default = {
  render: ({ children, ...args }: InputSwitchProps) => (
    <div>
      <Label for="firstName">First Name</Label>
      <InputSwitch id="firstName" name="firstName" />
    </div>
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
