/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Card, CardProps } from "@chepe/ui/src";

export default {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: CardProps) => <Card {...args}>{args.children}</Card>,
  args: {
    children: "Card Content",
  },
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
