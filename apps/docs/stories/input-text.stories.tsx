import React from "react";
import { InputText, InputTextProps } from "@chepe/ui/src";
import { Label } from "@chepe/ui/src";

export default {
  title: "Components/InputText",
  component: InputText,
};

export const Default = {
  render: (args: InputTextProps) => (
    <div>
      <Label for="firstName">First Name</Label>
      <InputText id="firstName" name="firstName" />
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
