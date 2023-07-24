/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { NotificiationGroup, NotificiationGroupProps } from "@chepe/ui/src/components/NotificiationGroup";

const meta: Meta<typeof NotificiationGroup> = {
  title: "Components/NotificiationGroup",
  component: NotificiationGroup,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NotificiationGroup>;

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
  render: (args: NotificiationGroupProps, { globals: { locale } }) => (
    <NotificiationGroup {...args}>{args.children || getCaptionForLocale(locale)}</NotificiationGroup>
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
