import React from "react";import { render } from "@testing-library/react";
import { BarChart } from "./BarChart";

describe("BarChart", () => {
  test("renders the BarChart component", () => {
    render(<BarChart />);
  });
});
