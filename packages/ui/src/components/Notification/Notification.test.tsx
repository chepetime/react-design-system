import React from "react";
import { render } from "@testing-library/react";
import { Notification } from "./Notification";

describe("Notification", () => {
  test("renders the Notification component", () => {
    render(<Notification />);
  });
});
