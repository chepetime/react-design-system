import React from "react";
import { render } from "@testing-library/react";
import { Grid } from "./Grid";

describe("Grid", () => {
  test("renders the Grid component", () => {
    render(<Grid />);
  });
});
