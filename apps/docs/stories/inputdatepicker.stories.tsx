import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InputDatepicker } from "@chepe/ui/src";

export default {
  title: "Form/InputDatepicker",
  component: InputDatepicker,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof InputDatepicker>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof InputDatepicker> = (args) => (
  <InputDatepicker>{args.children}</InputDatepicker>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
