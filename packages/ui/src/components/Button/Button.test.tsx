
import React from "react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/extend-expect'
import { Button } from "./Button";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
  it("renders without errors", () => {
    render(<Button />);
    // Assert that the component renders without throwing any errors
  });

  it("renders with children", () => {
    render(<Button>Some children</Button>);
    // Assert that the component renders the provided children
    const childrenElement = screen.getByText("Some children");
    expect(childrenElement).toBeInTheDocument();
  });

  it("handles user interactions", () => {
    render(<Button>Some children</Button>);
    // Simulate user interactions with the component
    userEvent.click(screen.getByText("Some children"));
    // Assert the expected outcome of the user interaction
    // For example, check if a certain state has changed or an event handler has been called
  });

  it("matches snapshot", () => {
    const { container } = render(<Button />);
    // Assert that the rendered component matches a previously captured snapshot
    expect(container).toMatchSnapshot();
  });
});
