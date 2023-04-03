/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Divider } from "@chepe/ui/src";

export default {
  title: "Components/Divider",
  component: Divider,
  tags: ["autodocs"],
};

export const Default = {
  render: () => <Divider />,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
