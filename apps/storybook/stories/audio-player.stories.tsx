/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AudioPlayer, AudioPlayerProps } from "@chepe/ui/src/components/AudioPlayer";

const meta: Meta<typeof AudioPlayer> = {
  title: "Components/AudioPlayer",
  component: AudioPlayer,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AudioPlayer>;

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
  render: (args: AudioPlayerProps, { globals: { locale } }) => (
    <AudioPlayer {...args}>{args.children || getCaptionForLocale(locale)}</AudioPlayer>
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
