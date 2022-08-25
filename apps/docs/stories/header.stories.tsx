import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Header } from "@chepe/ui/src";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Header>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof Header> = (args) => (
  <Header>{args.children}</Header>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
