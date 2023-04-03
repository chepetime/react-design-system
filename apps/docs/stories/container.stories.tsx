/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Container, ContainerProps } from "@chepe/ui/src";

export default {
  title: "Layout/Container",
  component: Container,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: ContainerProps) => (
    <Container {...args}>{args.children}</Container>
  ),
  args: {
    children: "Container Content",
  },
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};

export const Fluid = {
  render: (args: ContainerProps) => (
    <Container {...args} fluid>
      {args.children}
    </Container>
  ),
  args: {
    children: "Fluid Container Content",
  },
};

export const Sizes = {
  render: (args: ContainerProps) => (
    <div>
      <Container {...args} size="sm">
        Small Container Content
      </Container>
      <br />
      <Container {...args} size="md">
        Medium Container Content
      </Container>
      <br />
      <Container {...args} size="lg">
        Large Container Content
      </Container>
      <br />
      <Container {...args} size="xl">
        Extra Large Container Content
      </Container>
    </div>
  ),
  args: {
    children: "",
  },
};
