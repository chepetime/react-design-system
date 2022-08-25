import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tooltip } from "@chepe/ui/src";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Tooltip>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip>{args.children}</Tooltip>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
