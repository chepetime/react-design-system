/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AccordionProps,
} from "@chepe/ui/src";

export default {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: AccordionProps) => (
    <Accordion>
      <AccordionItem>
        <AccordionTrigger>First Section</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>Second Section</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
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
