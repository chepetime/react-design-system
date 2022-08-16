import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Card } from "ui/src";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Card>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof Card> = (args) => (
  <Card>{args.children}</Card>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
