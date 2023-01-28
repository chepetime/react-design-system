import React from "react";import { render } from "@testing-library/react";
import { Pagination } from "./Pagination";

describe("Pagination", () => {
  test("renders the Pagination component", () => {
    render(<Pagination />);
  });
});
