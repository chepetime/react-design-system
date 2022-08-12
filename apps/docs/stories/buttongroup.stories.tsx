import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonGroup } from "ui/src";

export default {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ButtonGroup>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup>{args.children}</ButtonGroup>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
