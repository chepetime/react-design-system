import React from "react";
import { AlertItem, AlertItemProps } from "@chepe/ui/src";

export default {
  title: "Components/AlertItem",
  component: AlertItem,
};

export const Default = {
  render: (args: AlertItemProps) => <AlertItem>{args.children}</AlertItem>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
