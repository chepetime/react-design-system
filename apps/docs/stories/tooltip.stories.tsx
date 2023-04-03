/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Tooltip, TooltipProps } from "@chepe/ui/src";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    direction: {
      options: ["top", "right", "bottom", "left"],
      control: { type: "radio" },
    },
  },
};

export const Default = {
  render: (args: TooltipProps) => (
    <div style={{ padding: "2rem", fontSize: "2rem" }}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
      <Tooltip {...args}>
        <span className="example-emoji" role="img" aria-label="cowboy emoji">
          🤠
        </span>
      </Tooltip>
      Vitae suscipit totam cupiditate consequuntur fugit iure, in ab corporis
      odit omnis alias atque ea est eos molestiae obcaecati incidunt natus
      repellendus.
    </div>
  ),
  args: {
    direction: "top",
    delay: 400,
    content: "Yeehay",
  },
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
