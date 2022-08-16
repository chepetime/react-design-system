import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Item } from "ui/src";

export default {
  title: "Layout/Item",
  component: Item,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Item>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof Item> = (args) => (
  <Item>{args.children}</Item>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
