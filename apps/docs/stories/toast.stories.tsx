import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Toast } from "@chepe/ui/src";

export default {
  title: "Components/Toast",
  component: Toast,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Toast>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof Toast> = (args) => (
  <Toast>{args.children}</Toast>
);

export const Default = Template.bind({});

Default.args = {};

Default.parameters = { design };
