import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Page } from "@chepe/ui/src";

export default {
  title: "Layout/Page",
  component: Page,
} as ComponentMeta<typeof Page>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof Page> = (args) => (
  <Page>{args.children}</Page>
);

export const Default = Template.bind({});

Default.args = {
  children: "Page",
};

Default.parameters = { design };
