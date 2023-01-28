import React from "react";import { render } from "@testing-library/react";
import { Tags } from "./Tags";

describe("Tags", () => {
  test("renders the Tags component", () => {
    render(<Tags />);
  });
});
