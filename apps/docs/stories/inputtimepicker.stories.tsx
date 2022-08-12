import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InputTimePicker } from "ui/src";

export default {
  title: "Form/InputTimePicker",
  component: InputTimePicker,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof InputTimePicker>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof InputTimePicker> = (args) => (
  <InputTimePicker>{args.children}</InputTimePicker>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
