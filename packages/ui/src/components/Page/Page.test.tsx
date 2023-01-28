import React from "react";import { render } from "@testing-library/react";
import { Page } from "./Page";

describe("Page", () => {
  test("renders the Page component", () => {
    render(<Page />);
  });
});
