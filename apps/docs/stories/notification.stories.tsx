import React from "react";
import { Notification, NotificationProps } from "@chepe/ui/src";

export default {
  title: "Components/Notification",
  component: Notification,
};

export const Default = {
  render: (args: NotificationProps) => (
    <Notification>{args.children}</Notification>
  ),
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
