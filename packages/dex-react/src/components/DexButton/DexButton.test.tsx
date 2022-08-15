import React from "react";
import { render } from "@testing-library/react";
import { DexButton } from "./DexButton";

describe("DexButton", () => {
  test("renders the Button component", () => {
    render(<DexButton />);
  });
});
