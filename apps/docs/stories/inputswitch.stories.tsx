import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InputSwitch } from "@chepe/ui/src";

export default {
  title: "Form/InputSwitch",
  component: InputSwitch,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof InputSwitch>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof InputSwitch> = (args) => (
  <InputSwitch>{args.children}</InputSwitch>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
