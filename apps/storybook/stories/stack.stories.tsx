/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Stack, StackProps } from "@chepe/ui/src";

export default {
  title: "Layout/Stack",
  component: Stack,
  tags: ["autodocs"],
};

const MockContent = () => (
  <div style={{ width: "100px", height: "50px", backgroundColor: "#ccc" }} />
);

export const Default = {
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
