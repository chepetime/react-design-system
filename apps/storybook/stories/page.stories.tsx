/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Page, PageProps } from "@chepe/ui/src/components/Page";

const meta: Meta<typeof Page> = {
  title: "Components/Page",
  component: Page,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Page>;

export const Default: Story = {
  render: (args: PageProps) => <Page>{args.children}</Page>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
