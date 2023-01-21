import React from "react";
import { Cards, CardsProps } from "@chepe/ui/src";

export default {
  title: "Components/Cards",
  component: Cards,
};

export const Default = {
  render: (args: CardsProps) => <Cards>{args.children}</Cards>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
