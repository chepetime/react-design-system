import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Paper } from "ui/src";

export default {
  title: "Components/Paper",
  component: Paper,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Paper>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof Paper> = (args) => (
  <Paper>{args.children}</Paper>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
