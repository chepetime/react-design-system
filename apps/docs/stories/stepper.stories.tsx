import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Stepper } from "ui/src";

export default {
  title: "Components/Stepper",
  component: Stepper,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Stepper>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof Stepper> = (args) => (
  <Stepper>{args.children}</Stepper>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
