import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CodeBlock } from "@chepe/ui/src";

export default {
  title: "Content/CodeBlock",
  component: CodeBlock,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CodeBlock>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof CodeBlock> = (args) => (
  <CodeBlock>{args.children}</CodeBlock>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
