import React from "react";
import { render } from "@testing-library/react";
import { Loading } from "./Loading";

describe("Loading", () => {
  test("renders the Loading component", () => {
    render(<Loading />);
  });
});
