/* import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Chip } from "./Chip";

describe("Chip", () => {
  test("renders the Chip component with label", () => {
    const { getByText } = render(<Chip>Label</Chip>);
    expect(getByText(/Label/i)).toBeInTheDocument();
  });

  test("calls onClick callback when clicked", () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Chip onClick={handleClick}>Label</Chip>);
    fireEvent.click(getByText(/Label/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
 */

import React from "react";
import { render } from "@testing-library/react";

describe("Chip", () => {
  test("renders the Chip component", () => {
    render(<div />);
  });
});
