/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Stack, StackProps } from "@chepe/ui/src/components/Stack";

const meta: Meta<typeof Stack> = {
  title: "Components/Stack",
  component: Stack,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Stack>;

const MockContent = () => (
  <div style={{ width: "100px", height: "50px", backgroundColor: "#ccc" }} />
);

export const Default: Story = {
  render: (args: StackProps) => (
    <Stack {...args}>
      <MockContent />
      <MockContent />
      <MockContent />
    </Stack>
  ),
  args: {
    spacing: 16,
    divider: false,
    horizontal: false,
  },
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
