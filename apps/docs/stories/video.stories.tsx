import React from "react";
import { Video, VideoProps } from "@chepe/ui/src";

export default {
  title: "Components/Video",
  component: Video,
};

export const Default = {
  render: (args: VideoProps) => <Video>{args.children}</Video>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
