/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { AudioPlayer, AudioPlayerProps } from "@chepe/ui/src";

export default {
  title: "Components/AudioPlayer",
  component: AudioPlayer,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: AudioPlayerProps) => <AudioPlayer {...args} />,
  args: {
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3",
  },
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
