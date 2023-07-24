/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TabPane, TabPaneProps } from "@chepe/ui/src/components/TabPane";

const meta: Meta<typeof TabPane> = {
  title: "Components/TabPane",
  component: TabPane,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TabPane>;

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
  render: (args: TabPaneProps, { globals: { locale } }) => (
    <TabPane {...args}>{args.children || getCaptionForLocale(locale)}</TabPane>
  ),
  args: {
    children: "",
  },
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
