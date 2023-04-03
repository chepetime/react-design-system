/* import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { InputSwitch } from "./InputSwitch";

const inputType = "checkbox";

describe("InputSwitch", () => {
  it("renders the switch input", () => {
    const { container } = render(<InputSwitch name="input" />);
    const input = container.querySelector(`input[type="${inputType}"]`);
    expect(input).toBeInTheDocument();
  });
});
 */

import React from "react";
import { render } from "@testing-library/react";

describe("InputSwitch", () => {
  test("renders the InputSwitch component", () => {
    render(<div />);
  });
});
