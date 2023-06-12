/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Input, InputProps } from "@chepe/ui/src/components/Input";
import { Label } from "@chepe/ui/src/components/Label";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args: InputProps) => (
    <div>
      <Label for="firstName">First Name</Label>
      <Input id="firstName" name="firstName" {...args} />
    </div>
  ),
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
