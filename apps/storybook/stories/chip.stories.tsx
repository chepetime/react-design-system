/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Chip, ChipProps } from "@chepe/ui/src";

export default {
  title: "Components/Chip",
  component: Chip,
  argTypes: {
    type: {
      options: ["primary", "secondary", "tertiary"],
      control: { type: "radio" },
    },
  },
} as Meta;

export const Primary = {
  render: (args: ChipProps) => <Chip {...args}>{args.children}</Chip>,
  args: {
    children: "Alert Message",
    type: "primary",
  },
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
