import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Caption } from "@chepe/ui/src";

export default {
  title: "Content/Caption",
  component: Caption,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Caption>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof Caption> = (args) => (
  <Caption>{args.children}</Caption>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
