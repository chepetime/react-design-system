import React from "react";
import { Card, CardProps } from "@chepe/ui/src";

export default {
  title: "Components/Card",
  component: Card,
};

export const Default = {
  render: (args: CardProps) => <Card>{args.children}</Card>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
