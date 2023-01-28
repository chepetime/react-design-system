import React from "react";import { render } from "@testing-library/react";
import { Container } from "./Container";

describe("Container", () => {
  test("renders the Container component", () => {
    render(<Container />);
  });
});
