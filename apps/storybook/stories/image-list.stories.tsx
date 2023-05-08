/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { ImageList, ImageListProps } from "@chepe/ui/src";

export default {
  title: "Components/ImageList",
  component: ImageList,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: ImageListProps) => (
    <ImageList {...args}>
      <img
        src="https://picsum.photos/id/1/400/300"
        alt="Demo Image for Image List Component"
      />
      <img
        src="https://picsum.photos/id/2/400/300"
        alt="Demo Image for Image List Component"
      />
      <img
        src="https://picsum.photos/id/3/400/300"
        alt="Demo Image for Image List Component"
      />
      <img
        src="https://picsum.photos/id/4/400/300"
        alt="Demo Image for Image List Component"
      />
      <img
        src="https://picsum.photos/id/5/400/300"
        alt="Demo Image for Image List Component"
      />
      <img
        src="https://picsum.photos/id/6/400/300"
        alt="Demo Image for Image List Component"
      />
      <img
        src="https://picsum.photos/id/7/400/300"
        alt="Demo Image for Image List Component"
      />
      <img
        src="https://picsum.photos/id/8/400/300"
        alt="Demo Image for Image List Component"
      />
      <img
        src="https://picsum.photos/id/9/400/300"
        alt="Demo Image for Image List Component"
      />
    </ImageList>
  ),
  args: {
    columns: 3,
    gap: 6,
  },
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
