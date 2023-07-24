import React from "react";
import classnames from "classnames";
import css from "./Spinner.module.scss";

export interface SpinnerProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  (props: SpinnerProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Spinner)} ref={ref}>
        <p>Spinner component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Spinner.displayName = "Spinner";
