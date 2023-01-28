import React from "react";import { render } from "@testing-library/react";
import { CodeBlock } from "./CodeBlock";

describe("CodeBlock", () => {
  test("renders the CodeBlock component", () => {
    render(<CodeBlock />);
  });
});
