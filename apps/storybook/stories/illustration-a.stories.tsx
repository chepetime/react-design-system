import React from "react";
import { IllustrationA, IllustrationAProps } from "@chepe/ui/src";

export default {
  title: "Components/IllustrationA",
  component: IllustrationA,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: IllustrationAProps) => <IllustrationA>{args.children}</IllustrationA>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
