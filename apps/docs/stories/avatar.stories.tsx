import React from "react";
import { Avatar, AvatarProps } from "@chepe/ui/src";

export default {
  title: "Components/Avatar",
  component: Avatar,
};

export const Default = {
  render: (args: AvatarProps) => <Avatar>{args.children}</Avatar>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
