/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { InputRangeSlider, InputRangeSliderProps } from "@chepe/ui/src";
import { Label } from "@chepe/ui/src";

export default {
  title: "Form/InputRangeSlider",
  component: InputRangeSlider,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: InputRangeSliderProps) => (
    <div>
      <Label for="range">Range</Label>
      <InputRangeSlider name="range" id="range" {...args} />
    </div>
  ),
  args: {
    min: 0,
    max: 100,
    step: 1,
  },
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
