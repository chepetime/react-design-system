import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Wrapper } from "@chepe/ui/src";

export default {
  title: "Layout/Wrapper",
  component: Wrapper,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Wrapper>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof Wrapper> = (args) => (
  <Wrapper>{args.children}</Wrapper>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
