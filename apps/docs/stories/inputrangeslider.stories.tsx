import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InputRangeSlider } from "ui/src";

export default {
  title: "Form/InputRangeSlider",
  component: InputRangeSlider,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof InputRangeSlider>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof InputRangeSlider> = (args) => (
  <InputRangeSlider>{args.children}</InputRangeSlider>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
