import React from "react";
import { render } from "@testing-library/react";
import { ScatterChart } from "./ScatterChart";

describe("ScatterChart", () => {
  test("renders the ScatterChart component", () => {
    render(<ScatterChart />);
  });
});
