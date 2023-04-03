import React from "react";import { render } from "@testing-library/react";
import { InputUpload } from "./InputUpload";

describe("InputUpload", () => {
  test("renders the InputUpload component", () => {
    render(<InputUpload />);
  });
});
