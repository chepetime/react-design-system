/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { List, ListProps } from "@chepe/ui/src";

export default {
  title: "Components/List",
  component: List,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: ListProps) => <List>{args.children}</List>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
