import React from "react";
import { render } from "@testing-library/react";
import { Button } from "./Button";

describe("DexButton", () => {
  test("renders the Button component", () => {
    render(<Button />);
  });
});
