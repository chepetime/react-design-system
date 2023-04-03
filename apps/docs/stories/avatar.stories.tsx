/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Avatar, AvatarProps } from "@chepe/ui/src";

export default {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: AvatarProps) => <Avatar {...args} />,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
