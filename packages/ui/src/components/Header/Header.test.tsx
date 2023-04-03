import React from "react";
import { render } from "@testing-library/react";
import { Header } from "./Header";

describe("Header", () => {
  test("renders the Header component", () => {
    render(<Header logo={<div>Logo</div>} navLinks={<div>Nav Links</div>} />);
  });
});
