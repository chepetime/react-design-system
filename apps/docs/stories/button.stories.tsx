import React from "react";
import { Button, ButtonProps } from "@chepe/ui/src";

export default {
  title: "Components/Button",
  component: Button,
};

export const Default = {
  render: (args: ButtonProps) => <Button>{args.children}</Button>,
  args: {
    children: "Click Me",
  },
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
