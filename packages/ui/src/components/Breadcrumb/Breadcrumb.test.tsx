import React from "react";
import { render } from "@testing-library/react";
import { Breadcrumb } from "./Breadcrumb";

describe("Breadcrumb", () => {
  test("renders the Breadcrumb component", () => {
    render(<Breadcrumb />);
  });
});
