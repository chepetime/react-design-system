import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Avatar } from "ui/src";

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Avatar>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof Avatar> = (args) => (
  <Avatar>{args.children}</Avatar>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
