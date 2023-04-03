/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { InputText, InputTextProps } from "@chepe/ui/src";
import { Label } from "@chepe/ui/src";

export default {
  title: "Form/InputText",
  component: InputText,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: InputTextProps) => (
    <div>
      <Label for="firstName">First Name</Label>
      <InputText id="firstName" name="firstName" {...args} />
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
