import React from "react";
import { Tags, TagsProps } from "@chepe/ui/src";

export default {
  title: "Components/Tags",
  component: Tags,
};

export const Default = {
  render: (args: TagsProps) => <Tags>{args.children}</Tags>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
