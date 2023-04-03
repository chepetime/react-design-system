import React from "react";
import { render } from "@testing-library/react";
import { ButtonGroup } from "./ButtonGroup";
import { Button } from "./../Button/Button";

describe("ButtonGroup", () => {
  test("renders the ButtonGroup component", () => {
    render(
      <ButtonGroup>
        <Button>Click Me</Button>
        <Button>Click Me</Button>
        <Button>Click Me</Button>
      </ButtonGroup>
    );
  });
});
