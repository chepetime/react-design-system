import React from "react";
import { Collapse, CollapseProps } from "@chepe/ui/src";

export default {
  title: "Components/Collapse",
  component: Collapse,
};

export const Default = {
  render: (args: CollapseProps) => <Collapse>{args.children}</Collapse>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
