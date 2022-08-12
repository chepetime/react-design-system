import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Link } from "ui/src";

export default {
  title: "Content/Link",
  component: Link,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Link>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof Link> = (args) => (
  <Link>{args.children}</Link>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
