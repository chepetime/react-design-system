/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Quote, QuoteProps } from "@chepe/ui/src";

export default {
  title: "Components/Quote",
  component: Quote,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: QuoteProps) => <Quote {...args}>{args.children}</Quote>,
  args: {
    author: "Steve Jobs",
    children:
      "“You can’t connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future.”",
  },
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
