import React from "react";
import { render } from "@testing-library/react";
import { Picture } from "./Picture";

describe("Picture", () => {
  test("renders the Picture component", () => {
    render(<Picture />);
  });
});
