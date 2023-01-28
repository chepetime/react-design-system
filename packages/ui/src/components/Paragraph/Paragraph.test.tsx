import React from "react";import { render } from "@testing-library/react";
import { Paragraph } from "./Paragraph";

describe("Paragraph", () => {
  test("renders the Paragraph component", () => {
    render(<Paragraph />);
  });
});
