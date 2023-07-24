
import React from "react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Text } from "./Text";
import { render, screen } from "@testing-library/react";

describe("Text", () => {
  it("renders without errors", () => {
    render(<Text />);
    // Assert that the component renders without throwing any errors
  });

  it("renders with children", () => {
    render(<Text>Some children</Text>);
    // Assert that the component renders the provided children
    const childrenElement = screen.getByText("Some children");
    expect(childrenElement).toBeInTheDocument();
  });

  it("handles user interactions", () => {
    render(<Text>Some children</Text>);
    // Simulate user interactions with the component
    userEvent.click(screen.getByText("Some children"));
    // Assert the expected outcome of the user interaction
    // For example, check if a certain state has changed or an event handler has been called
  });

  it("matches snapshot", () => {
    const { container } = render(<Text />);
    // Assert that the rendered component matches a previously captured snapshot
    expect(container).toMatchSnapshot();
  });
});
