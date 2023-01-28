import React from "react";import { render } from "@testing-library/react";
import { ButtonGroup } from "./ButtonGroup";

describe("ButtonGroup", () => {
  test("renders the ButtonGroup component", () => {
    render(<ButtonGroup />);
  });
});
