/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Text, TextProps } from "@chepe/ui/src";

export default {
  title: "Components/Text",
  component: Text,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: TextProps) => <Text>{args.children}</Text>,
  args: {
    children:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus corporis aperiam ab, voluptatem quia iste deleniti quam aut illo, totam cumque nobis ipsam maiores, doloribus id consequatur laboriosam. Fugit, possimus?",
  },
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
