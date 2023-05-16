import React from "react";
import { InputUpload, InputUploadProps } from "@chepe/ui/src";

export default {
  title: "Components/InputUpload",
  component: InputUpload,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: InputUploadProps) => <InputUpload>{args.children}</InputUpload>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
