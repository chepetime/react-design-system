import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BarChart } from "@chepe/ui/src";

export default {
  title: "Components/BarChart",
  component: BarChart,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof BarChart>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof BarChart> = (args) => (
  <BarChart>{args.children}</BarChart>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
