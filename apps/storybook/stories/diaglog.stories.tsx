/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Diaglog, DiaglogProps } from "@chepe/ui/src/components/Diaglog";

const meta: Meta<typeof Diaglog> = {
  title: "Components/Diaglog",
  component: Diaglog,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Diaglog>;

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
  render: (args: DiaglogProps, { globals: { locale } }) => (
    <Diaglog {...args}>{args.children || getCaptionForLocale(locale)}</Diaglog>
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
