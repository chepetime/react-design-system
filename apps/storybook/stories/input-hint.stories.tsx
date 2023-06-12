/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { InputHint, InputHintProps } from "@chepe/ui/src/components/InputHint";

const meta: Meta<typeof InputHint> = {
  title: "Components/InputHint",
  component: InputHint,
  argTypes: {
    type: {
      options: ["", "success", "warning", "error", "info"],
      control: { type: "radio" },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InputHint>;

export const Default: Story = {
  render: (args: InputHintProps) => <InputHint {...args} />,
  args: {
    children: "Input Hint Message",
    type: "info",
  },
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
