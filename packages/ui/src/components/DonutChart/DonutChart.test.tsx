import React from "react";import { render } from "@testing-library/react";
import { DonutChart } from "./DonutChart";

describe("DonutChart", () => {
  test("renders the DonutChart component", () => {
    render(<DonutChart />);
  });
});
