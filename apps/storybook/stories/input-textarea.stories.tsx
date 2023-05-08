/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { InputTextarea, InputTextareaProps } from "@chepe/ui/src";
import { Label } from "@chepe/ui/src";

export default {
  title: "Form/InputTextarea",
  component: InputTextarea,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: InputTextareaProps) => (
    <div>
      <Label for="biography">Biography</Label>
      <InputTextarea id="biography" name="biography" {...args} />
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
