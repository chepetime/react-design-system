import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DonutChart } from "ui/src";

export default {
  title: "DataViz/DonutChart",
  component: DonutChart,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof DonutChart>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof DonutChart> = (args) => (
  <DonutChart>{args.children}</DonutChart>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
