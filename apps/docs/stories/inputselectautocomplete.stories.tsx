import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InputSelectAutocomplete } from "@chepe/ui/src";

export default {
  title: "Form/InputSelectAutocomplete",
  component: InputSelectAutocomplete,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof InputSelectAutocomplete>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof InputSelectAutocomplete> = (args) => (
  <InputSelectAutocomplete>{args.children}</InputSelectAutocomplete>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
