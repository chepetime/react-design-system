import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Switch } from "ui/src";

export default {
  title: "Atoms/Switch",
  component: Switch,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Switch>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof Switch> = (args) => (
  <Switch>{args.children}</Switch>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
