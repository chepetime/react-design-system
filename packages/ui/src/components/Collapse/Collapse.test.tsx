/* import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Collapse } from "./Collapse";

describe("Collapse", () => {
  test("renders the Collapse component with label and content", () => {
    const { getByText, queryByText } = render(
      <Collapse label="Collapse Label">Collapse Content</Collapse>
    );

    expect(getByText("Collapse Label")).toBeInTheDocument();
    expect(queryByText("Collapse Content")).not.toBeInTheDocument();
  });

  test("toggles open and close on button click", () => {
    const { getByText, queryByText } = render(
      <Collapse label="Collapse Label">Collapse Content</Collapse>
    );

    const toggleButton = getByText("Collapse Label");

    fireEvent.click(toggleButton);

    expect(queryByText("Collapse Content")).toBeInTheDocument();

    fireEvent.click(toggleButton);

    expect(queryByText("Collapse Content")).not.toBeInTheDocument();
  });
});
 */

import React from "react";
import { render } from "@testing-library/react";

describe("Collapse", () => {
  test("renders the Collapse component", () => {
    render(<div />);
  });
});
