import React from "react";import { render } from "@testing-library/react";
import { Table } from "./Table";

describe("Table", () => {
  test("renders the Table component", () => {
    render(<Table />);
  });
});
