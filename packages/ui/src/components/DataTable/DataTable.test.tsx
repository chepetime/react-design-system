import React from "react";import { render } from "@testing-library/react";
import { DataTable } from "./DataTable";

describe("DataTable", () => {
  test("renders the DataTable component", () => {
    render(<DataTable />);
  });
});
