import React from "react";
import { Notice, NoticeProps } from "@chepe/ui/src";

export default {
  title: "Components/Notice",
  component: Notice,
};

export const Default = {
  render: (args: NoticeProps) => <Notice>{args.children}</Notice>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
