import React from "react";
import { Stepper, StepperProps } from "@chepe/ui/src";

export default {
  title: "Components/Stepper",
  component: Stepper,
};

export const Default = {
  render: (args: StepperProps) => <Stepper>{args.children}</Stepper>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
