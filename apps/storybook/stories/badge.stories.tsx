/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Badge, BadgeProps } from "@chepe/ui/src";

export default {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: BadgeProps) => <Badge {...args}>{args.children}</Badge>,
  args: {
    children: "Badge",
    color: "#ffffff",
    backgroundColor: "#064a94",
  },
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
