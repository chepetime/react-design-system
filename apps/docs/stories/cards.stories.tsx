import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Cards } from "ui/src";

export default {
  title: "Components/Cards",
  component: Cards,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Cards>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof Cards> = (args) => (
  <Cards>{args.children}</Cards>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
