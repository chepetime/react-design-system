import React from "react";
import { Container, ContainerProps } from "@chepe/ui/src";

export default {
  title: "Components/Container",
  component: Container,
};

export const Default = {
  render: (args: ContainerProps) => <Container>{args.children}</Container>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
