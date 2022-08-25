import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Grid } from "@chepe/ui/src";

export default {
  title: "Layout/Grid",
  component: Grid,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Grid>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof Grid> = (args) => (
  <Grid>{args.children}</Grid>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
