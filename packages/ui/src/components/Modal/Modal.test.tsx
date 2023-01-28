import React from "react";import { render } from "@testing-library/react";
import { Modal } from "./Modal";

describe("Modal", () => {
  test("renders the Modal component", () => {
    render(<Modal />);
  });
});
