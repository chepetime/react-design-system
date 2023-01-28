import React from "react";import { render } from "@testing-library/react";
import { Quote } from "./Quote";

describe("Quote", () => {
  test("renders the Quote component", () => {
    render(<Quote />);
  });
});
