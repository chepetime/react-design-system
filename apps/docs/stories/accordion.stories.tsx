import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Accordion } from "@chepe/ui/src";

export default {
  title: "Components/Accordion",
  component: Accordion,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Accordion>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion>{args.children}</Accordion>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
