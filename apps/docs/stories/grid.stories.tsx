import React from "react";
import { Grid, GridProps } from "@chepe/ui/src";

export default {
  title: "Components/Grid",
  component: Grid,
};

export const Default = {
  render: (args: GridProps) => <Grid>{args.children}</Grid>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
