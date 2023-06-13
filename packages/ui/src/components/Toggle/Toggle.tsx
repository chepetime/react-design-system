import React from "react";
import classnames from "classnames";
import css from "./Toggle.module.scss";

export interface ToggleProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Toggle = React.forwardRef<HTMLDivElement, ToggleProps>(
  (props: ToggleProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Toggle)} ref={ref}>
        <p>Toggle component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Toggle.displayName = "Toggle";
