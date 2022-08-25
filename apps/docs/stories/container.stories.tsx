import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Container } from "@chepe/ui/src";

export default {
  title: "Layout/Container",
  component: Container,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Container>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof Container> = (args) => (
  <Container>{args.children}</Container>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
