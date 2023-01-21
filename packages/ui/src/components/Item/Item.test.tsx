import React from "react";
import { render } from "@testing-library/react";
import { Item } from "./Item";

describe("Item", () => {
  test("renders the Item component", () => {
    render(<Item />);
  });
});
