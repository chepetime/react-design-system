import React from "react";
import { Accordion, AccordionProps } from "@chepe/ui/src";

export default {
  title: "Components/Accordion",
  component: Accordion,
};

export const Default = {
  render: (args: AccordionProps) => <Accordion>{args.children}</Accordion>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
