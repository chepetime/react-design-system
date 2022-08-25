import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InputText } from "@chepe/ui/src";

export default {
  title: "Form/InputText",
  component: InputText,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof InputText>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof InputText> = (args) => (
  <InputText>{args.children}</InputText>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
