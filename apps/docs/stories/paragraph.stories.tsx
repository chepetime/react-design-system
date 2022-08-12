import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Paragraph } from "ui/src";

export default {
  title: "Content/Paragraph",
  component: Paragraph,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Paragraph>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof Paragraph> = (args) => (
  <Paragraph>{args.children}</Paragraph>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
