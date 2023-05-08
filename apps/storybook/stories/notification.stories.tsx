/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Notification, NotificationProps } from "@chepe/ui/src";

export default {
  title: "Components/Notification",
  component: Notification,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: NotificationProps) => <Notification {...args} />,
  args: {
    children: "This is a notification message",
  },
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
