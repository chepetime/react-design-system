import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InputRadioButton } from "@chepe/ui/src";

export default {
  title: "Form/InputRadioButton",
  component: InputRadioButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof InputRadioButton>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof InputRadioButton> = (args) => (
  <InputRadioButton>{args.children}</InputRadioButton>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
