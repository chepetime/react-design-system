import React from "react";
import { Alert, AlertProps } from "@chepe/ui/src";

export default {
  title: "Components/Alert",
  component: Alert,
};

export const Default = {
  render: (args: AlertProps) => <Alert>{args.children}</Alert>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
