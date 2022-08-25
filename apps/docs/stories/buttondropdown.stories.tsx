import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonDropdown } from "@chepe/ui/src";

export default {
  title: "Components/ButtonDropdown",
  component: ButtonDropdown,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ButtonDropdown>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof ButtonDropdown> = (args) => (
  <ButtonDropdown>{args.children}</ButtonDropdown>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
