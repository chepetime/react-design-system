import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DexButton } from "dex-react";

export default {
  title: "Components/DexButton",
  component: DexButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof DexButton>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof DexButton> = (args) => (
  <DexButton>{args.children}</DexButton>
);

export const Default = Template.bind({});

Default.args = {
  children: "Click me",
};

Default.parameters = { design };
