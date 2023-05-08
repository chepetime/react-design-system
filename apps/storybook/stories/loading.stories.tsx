/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Loading, LoadingProps } from "@chepe/ui/src";

export default {
  title: "Components/Loading",
  component: Loading,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: LoadingProps) => <Loading>{args.children}</Loading>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
