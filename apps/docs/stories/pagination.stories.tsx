import React from "react";
import { Pagination, PaginationProps } from "@chepe/ui/src";

export default {
  title: "Components/Pagination",
  component: Pagination,
};

export const Default = {
  render: (args: PaginationProps) => <Pagination>{args.children}</Pagination>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
