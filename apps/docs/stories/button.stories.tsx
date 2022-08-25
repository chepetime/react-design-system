import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "@chepe/ui/src";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
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
  <Button>{args.children}</Button>
);

export const Default = Template.bind({});

Default.args = {
  children: "Click Me",
};

Default.parameters = { design };
