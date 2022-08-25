import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InputPassword } from "@chepe/ui/src";

export default {
  title: "Form/InputPassword",
  component: InputPassword,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof InputPassword>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof InputPassword> = (args) => (
  <InputPassword>{args.children}</InputPassword>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
