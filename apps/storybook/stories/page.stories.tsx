/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Page, PageProps } from "@chepe/ui/src";

export default {
  title: "Layout/Page",
  component: Page,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: PageProps) => <Page>{args.children}</Page>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
