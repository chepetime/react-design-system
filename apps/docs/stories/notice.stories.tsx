import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Notice } from "ui/src";

export default {
  title: "Components/Notice",
  component: Notice,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Notice>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof Notice> = (args) => (
  <Notice>{args.children}</Notice>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
