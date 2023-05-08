/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { InputSwitch, InputSwitchProps } from "@chepe/ui/src";
import { Label } from "@chepe/ui/src";

export default {
  title: "Form/InputSwitch",
  component: InputSwitch,
  tags: ["autodocs"],
};

export const Default = {
  render: ({ children, ...args }: InputSwitchProps) => (
    <div>
      <Label for="firstName">Enable Wifi</Label>
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
