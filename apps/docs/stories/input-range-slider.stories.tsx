import React from "react";
import { InputRangeSlider, InputRangeSliderProps } from "@chepe/ui/src";

export default {
  title: "Components/InputRangeSlider",
  component: InputRangeSlider,
};

export const Default = {
  render: (args: InputRangeSliderProps) => <InputRangeSlider />,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
