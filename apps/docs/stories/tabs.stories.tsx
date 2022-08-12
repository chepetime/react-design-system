import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tabs } from "ui/src";

export default {
  title: "Components/Tabs",
  component: Tabs,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Tabs>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof Tabs> = (args) => (
  <Tabs>{args.children}</Tabs>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
