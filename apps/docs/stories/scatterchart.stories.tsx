import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ScatterChart } from "@chepe/ui/src";

export default {
  title: "DataViz/ScatterChart",
  component: ScatterChart,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ScatterChart>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof ScatterChart> = (args) => (
  <ScatterChart>{args.children}</ScatterChart>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
