/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Wrapper, WrapperProps } from "@chepe/ui/src/components/Wrapper";

const meta: Meta<typeof Wrapper> = {
  title: "Components/Wrapper",
  component: Wrapper,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Wrapper>;

export const Default: Story = {
  render: (args: WrapperProps) => <Wrapper>{args.children}</Wrapper>,
  args: {
    children: "This content should be wrapped",
  },
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
