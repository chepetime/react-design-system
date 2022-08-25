import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Quote } from "@chepe/ui/src";

export default {
  title: "Content/Quote",
  component: Quote,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Quote>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof Quote> = (args) => (
  <Quote>{args.children}</Quote>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
