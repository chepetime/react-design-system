import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Label } from "@chepe/ui/src";

export default {
  title: "Form/Label",
  component: Label,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Label>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof Label> = (args) => (
  <Label>{args.children}</Label>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
