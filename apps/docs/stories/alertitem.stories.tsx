import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AlertItem } from "@chepe/ui/src";

export default {
  title: "Components/AlertItem",
  component: AlertItem,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof AlertItem>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof AlertItem> = (args) => (
  <AlertItem>{args.children}</AlertItem>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
