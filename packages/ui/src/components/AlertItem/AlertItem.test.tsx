import React from "react";
import { render } from "@testing-library/react";
import { AlertItem } from "./AlertItem";

describe("AlertItem", () => {
  test("renders the AlertItem component", () => {
    render(<AlertItem />);
  });
});
