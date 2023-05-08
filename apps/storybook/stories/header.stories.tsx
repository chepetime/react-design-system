/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Header, HeaderProps } from "@chepe/ui/src";

export default {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: HeaderProps) => <Header {...args} />,
  args: {
    logo: <div>Logo</div>,
    navLinks: <div>Nav Links</div>,
  },
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
