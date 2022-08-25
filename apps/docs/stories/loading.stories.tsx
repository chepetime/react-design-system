import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Loading } from "@chepe/ui/src";

export default {
  title: "Components/Loading",
  component: Loading,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Loading>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof Loading> = (args) => (
  <Loading>{args.children}</Loading>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
