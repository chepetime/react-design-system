import React from "react";
import { Item, ItemProps } from "@chepe/ui/src";

export default {
  title: "Components/Item",
  component: Item,
};

export const Default = {
  render: (args: ItemProps) => <Item>{args.children}</Item>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
