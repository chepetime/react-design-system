/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { InputUpload, InputUploadProps } from "@chepe/ui/src";
import { Label } from "@chepe/ui/src";

export default {
  title: "Form/InputUpload",
  component: InputUpload,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: InputUploadProps) => (
    <div>
      <Label for="cv">Upload your CV:</Label>
      <InputUpload id="cv" name="cv" {...args} />
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
