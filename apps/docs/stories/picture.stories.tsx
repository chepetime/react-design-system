import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Picture } from "@chepe/ui/src";

export default {
  title: "Content/Picture",
  component: Picture,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Picture>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof Picture> = (args) => (
  <Picture>{args.children}</Picture>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
