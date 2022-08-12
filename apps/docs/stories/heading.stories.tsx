import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Heading } from "ui/src";

export default {
  title: "Content/Heading",
  component: Heading,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Heading>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading>{args.children}</Heading>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
