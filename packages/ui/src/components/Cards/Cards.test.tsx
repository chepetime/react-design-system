import React from "react";import { render } from "@testing-library/react";
import { Cards } from "./Cards";

describe("Cards", () => {
  test("renders the Cards component", () => {
    render(<Cards />);
  });
});
