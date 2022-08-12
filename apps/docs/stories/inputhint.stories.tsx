import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InputHint } from "ui/src";

export default {
  title: "Form/InputHint",
  component: InputHint,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof InputHint>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof InputHint> = (args) => (
  <InputHint>{args.children}</InputHint>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
