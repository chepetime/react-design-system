import React from "react";
import { render } from "@testing-library/react";
import { Stepper } from "./Stepper";

describe("Stepper", () => {
  test("renders the Stepper component", () => {
    render(
      <Stepper
        steps={[""]}
        currentStep={0}
        onStepChange={function (step: number): void {
          throw new Error(`${step} Function not implemented.`);
        }}
      />
    );
  });
});
