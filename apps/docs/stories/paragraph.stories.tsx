import React from "react";
import { Paragraph, ParagraphProps } from "@chepe/ui/src";

export default {
  title: "Components/Paragraph",
  component: Paragraph,
};

export const Default = {
  render: (args: ParagraphProps) => <Paragraph>{args.children}</Paragraph>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
