import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { LineChart } from "ui/src";

export default {
  title: "DataViz/LineChart",
  component: LineChart,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof LineChart>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof LineChart> = (args) => (
  <LineChart>{args.children}</LineChart>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
