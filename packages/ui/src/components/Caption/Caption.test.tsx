import React from "react";import { render } from "@testing-library/react";
import { Caption } from "./Caption";

describe("Caption", () => {
  test("renders the Caption component", () => {
    render(<Caption />);
  });
});
