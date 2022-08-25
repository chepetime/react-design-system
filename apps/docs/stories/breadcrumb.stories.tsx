import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Breadcrumb } from "@chepe/ui/src";

export default {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Breadcrumb>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof Breadcrumb> = (args) => (
  <Breadcrumb>{args.children}</Breadcrumb>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
