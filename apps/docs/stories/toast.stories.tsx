/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Toast, ToastProps } from "@chepe/ui/src";

export default {
  title: "Components/Toast",
  component: Toast,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: ToastProps) => <Toast>{args.children}</Toast>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
