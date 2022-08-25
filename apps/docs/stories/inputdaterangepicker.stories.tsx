import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InputDateRangePicker } from "@chepe/ui/src";

export default {
  title: "Form/InputDateRangePicker",
  component: InputDateRangePicker,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof InputDateRangePicker>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof InputDateRangePicker> = (args) => (
  <InputDateRangePicker>{args.children}</InputDateRangePicker>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
