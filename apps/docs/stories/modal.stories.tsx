import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Modal } from "ui/src";

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Modal>;

const design = [
  {
    type: "figma",
    name: "UI",
    url: "",
  },
];

const Template: ComponentStory<typeof Modal> = (args) => (
  <Modal>{args.children}</Modal>
);

export const Default = Template.bind({});

Default.args = {
  children: "",
};

Default.parameters = { design };
