import React from "react";
import { Tabs, TabsProps } from "@chepe/ui/src";

export default {
  title: "Components/Tabs",
  component: Tabs,
};

export const Default = {
  render: (args: TabsProps) => <Tabs>{args.children}</Tabs>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
