
import React from "react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Avatar } from "./Avatar";
import { render, screen } from "@testing-library/react";

describe("Avatar", () => {
  it("renders without errors", () => {
    render(<Avatar />);
    // Assert that the component renders without throwing any errors
  });

  it("renders with children", () => {
    render(<Avatar>Some children</Avatar>);
    // Assert that the component renders the provided children
    const childrenElement = screen.getByText("Some children");
    expect(childrenElement).toBeInTheDocument();
  });

  it("handles user interactions", () => {
    render(<Avatar>Some children</Avatar>);
    // Simulate user interactions with the component
    userEvent.click(screen.getByText("Some children"));
    // Assert the expected outcome of the user interaction
    // For example, check if a certain state has changed or an event handler has been called
  });

  it("matches snapshot", () => {
    const { container } = render(<Avatar />);
    // Assert that the rendered component matches a previously captured snapshot
    expect(container).toMatchSnapshot();
  });
});
