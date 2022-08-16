import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { __componentName__(pascalCase) } from "dex-react";

export default {
  title: "Components/__componentName__(pascalCase)",
  component: __componentName__(pascalCase),
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof __componentName__(pascalCase)>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof __componentName__(pascalCase)> = (args) => (
  <__componentName__(pascalCase)>{args.children}</__componentName__(pascalCase)>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
