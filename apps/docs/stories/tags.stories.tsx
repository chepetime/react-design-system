import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tags } from "@chepe/ui/src";

export default {
  title: "Components/Tags",
  component: Tags,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Tags>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof Tags> = (args) => (
  <Tags>{args.children}</Tags>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
