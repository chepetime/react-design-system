import React from "react";
import { Picture, PictureProps } from "@chepe/ui/src";

export default {
  title: "Components/Picture",
  component: Picture,
};

export const Default = {
  render: (args: PictureProps) => <Picture>{args.children}</Picture>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
