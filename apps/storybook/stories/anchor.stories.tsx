/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Anchor, AnchorProps } from "@chepe/ui/src";

export default {
  title: "Components/Anchor",
  component: Anchor,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: AnchorProps) => <Anchor {...args}>{args.children}</Anchor>,
  args: {
    children: "Link to my Website",
    href: "https://joselugo.dev",
    target: "_blank",
  },
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
