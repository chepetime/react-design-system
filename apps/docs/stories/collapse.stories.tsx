/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import { Collapse, CollapseProps } from "@chepe/ui/src";

export default {
  title: "Components/Collapse",
  component: Collapse,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: CollapseProps) => {
    return (
      <Collapse {...args}>
        <p>Some content here...</p>
      </Collapse>
    );
  },
  args: {
    label: "Collapse title",
    isOpen: false,
  },
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
