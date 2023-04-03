import React from "react";import { render } from "@testing-library/react";
import { ImageList } from "./ImageList";

describe("ImageList", () => {
  test("renders the ImageList component", () => {
    render(<ImageList />);
  });
});
