/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { DataTable, DataTableProps } from "@chepe/ui/src";

export default {
  title: "Data/DataTable",
  component: DataTable,
  tags: ["autodocs"],
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
