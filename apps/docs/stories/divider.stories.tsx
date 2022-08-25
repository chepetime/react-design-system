import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Divider } from "@chepe/ui/src";

export default {
  title: "Components/Divider",
  component: Divider,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Divider>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof Divider> = (args) => (
  <Divider>{args.children}</Divider>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
