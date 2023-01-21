import React from "react";
import { Breadcrumb, BreadcrumbProps } from "@chepe/ui/src";

export default {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
};

export const Default = {
  render: (args: BreadcrumbProps) => <Breadcrumb>{args.children}</Breadcrumb>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
