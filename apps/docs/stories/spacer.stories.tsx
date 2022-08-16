import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Spacer } from "ui/src";

export default {
  title: "Layout/Spacer",
  component: Spacer,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Spacer>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof Spacer> = (args) => (
  <Spacer>{args.children}</Spacer>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
