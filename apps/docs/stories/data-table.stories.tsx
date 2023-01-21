import React from "react";
import { DataTable, DataTableProps } from "@chepe/ui/src";

export default {
  title: "Components/DataTable",
  component: DataTable,
};

export const Default = {
  render: (args: DataTableProps) => <DataTable>{args.children}</DataTable>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      name: "UI",
      url: "",
    },
  },
};
