/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "@chepe/ui/src/components/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

const styleParams = {
  design: {
    type: "figma",
    name: "UI",
    url: "",
  },
};

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
  parameters: {
    ...styleParams,
  },
};

export const Primary: Story = {
  render: (args: ButtonProps, { globals: { locale } }) => (
    <Button {...args}>{args.children || getCaptionForLocale(locale)}</Button>
  ),
  args: {
    children: "Primary Button",
    variant: "default",
    color: "primary",
    size: "default",
  },
  parameters: {
    ...styleParams,
  },
};

export const Ghost: Story = {
  render: (args: ButtonProps, { globals: { locale } }) => (
    <Button {...args}>{args.children || getCaptionForLocale(locale)}</Button>
  ),
  args: {
    children: "Ghost Button",
    variant: "ghost",
    color: "primary",
    size: "default",
  },
  parameters: {
    ...styleParams,
  },
};

export const Text: Story = {
  render: (args: ButtonProps, { globals: { locale } }) => (
    <Button {...args}>{args.children || getCaptionForLocale(locale)}</Button>
  ),
  args: {
    children: "Text Button",
    variant: "text",
    color: "primary",
    size: "default",
  },
  parameters: {
    ...styleParams,
  },
};

export const Link: Story = {
  render: (args: ButtonProps, { globals: { locale } }) => (
    <Button {...args}>{args.children || getCaptionForLocale(locale)}</Button>
  ),
  args: {
    children: "Link Button",
    variant: "link",
    color: "primary",
    size: "default",
  },
  parameters: {
    ...styleParams,
  },
};

export const Small: Story = {
  render: (args: ButtonProps, { globals: { locale } }) => (
    <Button {...args}>{args.children || getCaptionForLocale(locale)}</Button>
  ),
  args: {
    children: "Small Button",
    variant: "default",
    color: "primary",
    size: "small",
  },
  parameters: {
    ...styleParams,
  },
};

export const Large: Story = {
  render: (args: ButtonProps, { globals: { locale } }) => (
    <Button {...args}>{args.children || getCaptionForLocale(locale)}</Button>
  ),
  args: {
    children: "Large Button",
    variant: "default",
    color: "primary",
    size: "large",
  },
  parameters: {
    ...styleParams,
  },
};
