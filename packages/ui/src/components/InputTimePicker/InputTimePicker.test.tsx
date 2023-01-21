import React from "react";
import { render } from "@testing-library/react";
import { InputTimePicker } from "./InputTimePicker";

describe("InputTimePicker", () => {
  test("renders the InputTimePicker component", () => {
    render(<InputTimePicker />);
  });
});
