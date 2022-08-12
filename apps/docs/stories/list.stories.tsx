import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { List } from "ui/src";

export default {
  title: "Content/List",
  component: List,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof List>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof List> = (args) => (
  <List>{args.children}</List>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
