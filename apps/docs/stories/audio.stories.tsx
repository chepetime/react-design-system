import React from "react";
import { Audio, AudioProps } from "@chepe/ui/src";

export default {
  title: "Components/Audio",
  component: Audio,
};

export const Default = {
  render: (args: AudioProps) => <Audio>{args.children}</Audio>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
