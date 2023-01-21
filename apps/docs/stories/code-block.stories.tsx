import React from "react";
import { CodeBlock, CodeBlockProps } from "@chepe/ui/src";

export default {
  title: "Components/CodeBlock",
  component: CodeBlock,
};

export const Default = {
  render: (args: CodeBlockProps) => <CodeBlock>{args.children}</CodeBlock>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
