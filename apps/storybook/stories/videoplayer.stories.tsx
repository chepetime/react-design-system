/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Videoplayer, VideoplayerProps } from "@chepe/ui/src/components/Videoplayer";

const meta: Meta<typeof Videoplayer> = {
  title: "Components/Videoplayer",
  component: Videoplayer,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Videoplayer>;

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
  render: (args: VideoplayerProps, { globals: { locale } }) => (
    <Videoplayer {...args}>{args.children || getCaptionForLocale(locale)}</Videoplayer>
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
