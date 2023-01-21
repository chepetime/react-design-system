import React from "react";
import { render } from "@testing-library/react";
import { List } from "./List";

describe("List", () => {
  test("renders the List component", () => {
    render(<List />);
  });
});
