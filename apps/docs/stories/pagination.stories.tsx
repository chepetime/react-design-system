import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Pagination } from "@chepe/ui/src";

export default {
  title: "Components/Pagination",
  component: Pagination,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Pagination>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination>{args.children}</Pagination>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
