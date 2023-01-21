import React from "react";
import { render } from "@testing-library/react";
import { Heading } from "./Heading";

describe("Heading", () => {
  test("renders the Heading component", () => {
    render(<Heading />);
  });
});
