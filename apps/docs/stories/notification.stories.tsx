import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Notification } from "ui/src";

export default {
  title: "Components/Notification",
  component: Notification,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Notification>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof Notification> = (args) => (
  <Notification>{args.children}</Notification>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
