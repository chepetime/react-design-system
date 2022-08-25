import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InputCheckbox } from "@chepe/ui/src";

export default {
  title: "Form/InputCheckbox",
  component: InputCheckbox,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof InputCheckbox>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof InputCheckbox> = (args) => (
  <InputCheckbox>{args.children}</InputCheckbox>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
