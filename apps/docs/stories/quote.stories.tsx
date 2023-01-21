import React from "react";
import { Quote, QuoteProps } from "@chepe/ui/src";

export default {
  title: "Components/Quote",
  component: Quote,
};

export const Default = {
  render: (args: QuoteProps) => <Quote>{args.children}</Quote>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
