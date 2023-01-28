import React from "react";import { render } from "@testing-library/react";
import { LineChart } from "./LineChart";

describe("LineChart", () => {
  test("renders the LineChart component", () => {
    render(<LineChart />);
  });
});
