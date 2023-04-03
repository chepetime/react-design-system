/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Alert, AlertProps } from "@chepe/ui/src";

export default {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: AlertProps) => <Alert {...args}>{args.children}</Alert>,
  args: {
    children: "Alert Message",
  },
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
