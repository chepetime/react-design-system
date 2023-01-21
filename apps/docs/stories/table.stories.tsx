import React from "react";
import { Table, TableProps } from "@chepe/ui/src";

export default {
  title: "Components/Table",
  component: Table,
};

export const Default = {
  render: (args: TableProps) => <Table>{args.children}</Table>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
