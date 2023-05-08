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

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "es":
      return "¡Hola!";
    case "fr":
      return "Bonjour!";
    case "kr":
      return "안녕하세요!";
    case "zh":
      return "你好!";
    default:
      return "Hello!";
  }
};
export const Default: Story = {
  render: (args: ButtonProps, { globals: { locale } }) => (
    <Button {...args}>{args.children || getCaptionForLocale(locale)}</Button>
  ),
  args: {
    children: "",
  },
};

export const Ghost: Story = {
  render: (args: ButtonProps, { globals: { locale } }) => (
    <Button {...args}>{args.children || getCaptionForLocale(locale)}</Button>
  ),
  args: {
    children: "",
  },
};

export const Text: Story = {
  render: (args: ButtonProps, { globals: { locale } }) => (
    <Button {...args}>{args.children || getCaptionForLocale(locale)}</Button>
  ),
  args: {
    children: "",
    variant: "text",
  },
};

export const Link: Story = {
  render: (args: ButtonProps, { globals: { locale } }) => (
    <Button {...args}>{args.children || getCaptionForLocale(locale)}</Button>
  ),
  args: {
    children: "",
    variant: "link",
  },
};

export const Large: Story = {
  render: (args: ButtonProps, { globals: { locale } }) => (
    <Button {...args}>{args.children || getCaptionForLocale(locale)}</Button>
  ),
  args: {
    children: "",
    size: "large",
  },
};

export const Small: Story = {
  render: (args: ButtonProps, { globals: { locale } }) => (
    <Button {...args}>{args.children || getCaptionForLocale(locale)}</Button>
  ),
  args: {
    children: "",
    size: "small",
  },
};
