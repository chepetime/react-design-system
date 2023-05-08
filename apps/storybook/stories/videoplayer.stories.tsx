/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { VideoPlayer, VideoPlayerProps } from "@chepe/ui/src";

export default {
  title: "Components/VideoPlayer",
  component: VideoPlayer,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: VideoPlayerProps) => (
    <VideoPlayer {...args}>
      <source src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" />
    </VideoPlayer>
  ),
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
