import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Progress } from "@chepe/ui/src";

export default {
  title: "Components/Progress",
  component: Progress,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Progress>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof Progress> = (args) => (
  <Progress>{args.children}</Progress>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
