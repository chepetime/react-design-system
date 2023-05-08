/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Grid, GridProps } from "@chepe/ui/src";

export default {
  title: "Components/Grid",
  component: Grid,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: GridProps) => (
    <Grid {...args}>
      <div>Grid item 1</div>
      <div>Grid item 2</div>
      <div>Grid item 3</div>
      <div>Grid item 4</div>
    </Grid>
  ),
  args: {
    columns: 1,
    rows: 1,
    gap: 1,
    debug: true,
  },
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
