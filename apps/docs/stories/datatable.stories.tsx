import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DataTable } from "@chepe/ui/src";

export default {
  title: "DataViz/DataTable",
  component: DataTable,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof DataTable>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof DataTable> = (args) => (
  <DataTable>{args.children}</DataTable>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
