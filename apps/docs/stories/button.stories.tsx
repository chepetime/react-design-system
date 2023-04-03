/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, type ButtonProps } from "@chepe/ui/src";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args: ButtonProps) => <Button {...args}>{args.children}</Button>,
  args: {
    children: "Click Me",
  },
};

export const Ghost: Story = {
  render: (args: ButtonProps) => <Button {...args}>{args.children}</Button>,
  args: {
    children: "Click Me",
  },
};

export const Text: Story = {
  render: (args: ButtonProps) => <Button {...args}>{args.children}</Button>,
  args: {
    children: "Click Me",
    variant: "text",
  },
};

export const Link: Story = {
  render: (args: ButtonProps) => <Button {...args}>{args.children}</Button>,
  args: {
    children: "Click Me",
    variant: "link",
  },
};

export const Large: Story = {
  render: (args: ButtonProps) => <Button {...args}>{args.children}</Button>,
  args: {
    children: "Click Me",
    size: "large",
  },
};

export const Small: Story = {
  render: (args: ButtonProps) => <Button {...args}>{args.children}</Button>,
  args: {
    children: "Click Me",
    size: "small",
  },
};
