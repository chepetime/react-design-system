import React from "react";
import { render } from "@testing-library/react";
import { InputHint } from "./InputHint";

describe("InputHint", () => {
  test("renders the InputHint component", () => {
    render(<InputHint>Field is required</InputHint>);
  });
});
