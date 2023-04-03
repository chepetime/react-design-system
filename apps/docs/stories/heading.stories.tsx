/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Heading, HeadingProps } from "@chepe/ui/src";

export default {
  title: "Components/Heading",
  component: Heading,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: HeadingProps) => (
    <>
      <Heading as="h1" styleAs="h1">
        {args.children} h1 styled as h1
      </Heading>
      <Heading as="h2" styleAs="h2">
        {args.children} h2 styled as h2
      </Heading>
      <Heading as="h3" styleAs="h3">
        {args.children} h3 styled as h3
      </Heading>
      <Heading as="h4" styleAs="h4">
        {args.children} h4 styled as h4
      </Heading>
      <Heading as="h5" styleAs="h6">
        {args.children} h5 styled as h5
      </Heading>
      <Heading as="h6" styleAs="h6">
        {args.children} h6 styled as h6
      </Heading>
    </>
  ),
  args: {
    children: "This is a heading",
  },
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
