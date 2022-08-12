import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InputSearch } from "ui/src";

export default {
  title: "Form/InputSearch",
  component: InputSearch,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof InputSearch>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof InputSearch> = (args) => (
  <InputSearch>{args.children}</InputSearch>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
