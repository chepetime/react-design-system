import React from "react";
import { Link, LinkProps } from "@chepe/ui/src";

export default {
  title: "Components/Link",
  component: Link,
};

export const Default = {
  render: (args: LinkProps) => <Link>{args.children}</Link>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
