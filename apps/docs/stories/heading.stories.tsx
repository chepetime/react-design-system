import React from "react";
import { Heading, HeadingProps } from "@chepe/ui/src";

export default {
  title: "Components/Heading",
  component: Heading,
};

export const Default = {
  render: (args: HeadingProps) => <Heading>{args.children}</Heading>,
  args: {
    children: "Tittle",
  },
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
