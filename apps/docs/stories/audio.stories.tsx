import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Audio } from "ui/src";

export default {
  title: "Content/Audio",
  component: Audio,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Audio>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof Audio> = (args) => (
  <Audio>{args.children}</Audio>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
