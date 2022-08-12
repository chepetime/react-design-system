import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InputSelect } from "ui/src";

export default {
  title: "Form/InputSelect",
  component: InputSelect,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof InputSelect>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof InputSelect> = (args) => (
  <InputSelect>{args.children}</InputSelect>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
