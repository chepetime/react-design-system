import React from "react";
import { render } from "@testing-library/react";
import { ButtonDropdown, ButtonDropdownItem } from "./ButtonDropdown";

describe("ButtonDropdown", () => {
  test("renders the ButtonDropdown component", () => {
    render(
      <ButtonDropdown label="Options">
        <ButtonDropdownItem>Option 1</ButtonDropdownItem>
        <ButtonDropdownItem>Option 2</ButtonDropdownItem>
      </ButtonDropdown>
    );
  });
});
