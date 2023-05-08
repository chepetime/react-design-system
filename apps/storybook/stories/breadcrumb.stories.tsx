/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Breadcrumb, BreadcrumbElement, BreadcrumbProps } from "@chepe/ui/src";

export default {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: BreadcrumbProps) => (
    <Breadcrumb>
      <BreadcrumbElement>Element 1</BreadcrumbElement>
      <BreadcrumbElement>Element 2</BreadcrumbElement>
      <BreadcrumbElement>Element 3</BreadcrumbElement>
      <BreadcrumbElement href="/">Element 4</BreadcrumbElement>
    </Breadcrumb>
  ),
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
