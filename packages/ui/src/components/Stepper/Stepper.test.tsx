import React from "react";import { render } from "@testing-library/react";
import { Stepper } from "./Stepper";

describe("Stepper", () => {
  test("renders the Stepper component", () => {
    render(<Stepper />);
  });
});
