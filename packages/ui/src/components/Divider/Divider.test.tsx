import React from "react";import { render } from "@testing-library/react";
import { Divider } from "./Divider";

describe("Divider", () => {
  test("renders the Divider component", () => {
    render(<Divider />);
  });
});
