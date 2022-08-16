import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Table } from "ui/src";

export default {
  title: "Content/Table",
  component: Table,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Table>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof Table> = (args) => (
  <Table>{args.children}</Table>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
