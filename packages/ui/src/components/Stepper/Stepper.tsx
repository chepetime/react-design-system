import React from "react";
import classnames from "classnames";
import css from "./Stepper.module.scss";

export interface StepperProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  (props: StepperProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Stepper)} ref={ref}>
        <p>Stepper component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Stepper.displayName = "Stepper";
