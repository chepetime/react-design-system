import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InputRadioButtonGroup } from "ui/src";

export default {
  title: "Form/InputRadioButtonGroup",
  component: InputRadioButtonGroup,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof InputRadioButtonGroup>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof InputRadioButtonGroup> = (args) => (
  <InputRadioButtonGroup>{args.children}</InputRadioButtonGroup>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
