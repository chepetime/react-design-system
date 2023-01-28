import React from "react";import { render } from "@testing-library/react";
import { Audio } from "./Audio";

describe("Audio", () => {
  test("renders the Audio component", () => {
    render(<Audio />);
  });
});
