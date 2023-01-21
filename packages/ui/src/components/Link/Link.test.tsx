import React from "react";
import { render } from "@testing-library/react";
import { Link } from "./Link";

describe("Link", () => {
  test("renders the Link component", () => {
    render(<Link />);
  });
});
