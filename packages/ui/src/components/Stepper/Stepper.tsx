import * as React from "react";
import classnames from "classnames";
import css from "./Stepper.module.scss";

export interface StepperProps {
  children?: React.ReactNode;
}

export function Stepper(props: StepperProps) {
  return (
    <div className={classnames(css.Stepper)}>
      <p>Stepper component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

Stepper.displayName = "Stepper";
