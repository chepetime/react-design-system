import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InputTextarea } from "@chepe/ui/src";

export default {
  title: "Form/InputTextarea",
  component: InputTextarea,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof InputTextarea>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof InputTextarea> = (args) => (
  <InputTextarea>{args.children}</InputTextarea>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
