import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "@chepe/ui/src";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    disabled: { control: "boolean" },
  },
} as ComponentMeta<typeof Button>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{args.children}</Button>
);

export const Default = Template.bind({});

Default.args = {
  children: "Click Me",
  title: "Title of the button",
  id: "button_1",
  name: "click_me",
  type: "button",
  disabled: false,
  tabIndex: 0,
};

Default.parameters = { design };
