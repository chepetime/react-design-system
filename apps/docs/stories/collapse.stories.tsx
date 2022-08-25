import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Collapse } from "@chepe/ui/src";

export default {
  title: "Components/Collapse",
  component: Collapse,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Collapse>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof Collapse> = (args) => (
  <Collapse>{args.children}</Collapse>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
