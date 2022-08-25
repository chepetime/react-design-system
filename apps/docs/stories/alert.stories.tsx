import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Alert } from "@chepe/ui/src";

export default {
  title: "Components/Alert",
  component: Alert,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Alert>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof Alert> = (args) => (
  <Alert>{args.children}</Alert>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
