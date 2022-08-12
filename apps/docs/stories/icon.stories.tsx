import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Icon } from "ui/src";

export default {
  title: "Content/Icon",
  component: Icon,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Icon>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof Icon> = (args) => (
  <Icon>{args.children}</Icon>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
