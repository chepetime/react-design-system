import React from "react";
import { render } from "@testing-library/react";
import { Notice } from "./Notice";

describe("Notice", () => {
  test("renders the Notice component", () => {
    render(<Notice />);
  });
});
