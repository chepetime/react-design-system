import React from "react";
import { render } from "@testing-library/react";
import { Toast } from "./Toast";

describe("Toast", () => {
  test("renders the Toast component", () => {
    render(<Toast />);
  });
});
