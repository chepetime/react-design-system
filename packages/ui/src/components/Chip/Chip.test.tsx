import React from "react";import { render } from "@testing-library/react";
import { Chip } from "./Chip";

describe("Chip", () => {
  test("renders the Chip component", () => {
    render(<Chip />);
  });
});
