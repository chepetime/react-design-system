import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Chip } from "@chepe/ui/src";

export default {
  title: "Components/Chip",
  component: Chip,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Chip>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof Chip> = (args) => (
  <Chip>{args.children}</Chip>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
