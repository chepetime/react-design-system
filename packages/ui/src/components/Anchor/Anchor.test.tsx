import React from "react";
import { render } from "@testing-library/react";
import { Anchor } from "./Anchor";

describe("Anchor", () => {
  test("renders the Anchor component", () => {
    render(<Anchor href="https://joselugo.dev" />);
  });
});
