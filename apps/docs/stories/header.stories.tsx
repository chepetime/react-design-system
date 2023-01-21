import React from "react";
import { Header, HeaderProps } from "@chepe/ui/src";

export default {
  title: "Components/Header",
  component: Header,
};

export const Default = {
  render: (args: HeaderProps) => <Header>{args.children}</Header>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
