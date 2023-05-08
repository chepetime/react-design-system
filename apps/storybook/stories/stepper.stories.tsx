/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Stepper, StepperProps } from "@chepe/ui/src";

export default {
  title: "Components/Stepper",
  component: Stepper,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: StepperProps) => <Stepper {...args} />,
  args: {
    steps: ["Welcome", "Step 2", "Step 3", "Step 4"],
    currentStep: 2,
  },
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
