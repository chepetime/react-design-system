/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Input, InputProps } from "@chepe/ui/src/components/Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args: InputProps) => <Input {...args} />,
  args: {
    error: false,
  },
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
