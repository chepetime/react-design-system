import React from "react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Input } from "./Input";
import type { InputProps } from "./Input";
import { render, screen } from "@testing-library/react";

describe("Input", () => {
  const defaultProps: InputProps = {
    error: false,
  };

  it("renders without errors", () => {
    render(<Input {...defaultProps} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("renders with error class when error prop is true", () => {
    render(<Input {...defaultProps} error={true} />);
    expect(screen.getByRole("textbox")).toHaveClass("Input--error");
  });

  it("triggers onChange event", async () => {
    const handleChange = jest.fn();
    render(<Input {...defaultProps} onChange={handleChange} />);
    const input = screen.getByRole("textbox");
    const value = "Test value";
    await userEvent.type(input, value);
    expect(handleChange).toHaveBeenCalledWith(expect.anything());
    expect(input).toHaveValue(value);
  });

  it("matches snapshot", () => {
    const { container } = render(<Input />);
    // Assert that the rendered component matches a previously captured snapshot
    expect(container).toMatchSnapshot();
  });
});
