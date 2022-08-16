import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Video } from "ui/src";

export default {
  title: "Components/Video",
  component: Video,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Video>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof Video> = (args) => (
  <Video>{args.children}</Video>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
