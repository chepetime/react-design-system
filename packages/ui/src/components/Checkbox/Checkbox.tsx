import React from "react";
import classnames from "classnames";
import css from "./Checkbox.module.scss";

export interface CheckboxProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Checkbox = React.forwardRef<HTMLDivElement, CheckboxProps>(
  (props: CheckboxProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Checkbox)} ref={ref}>
        <p>Checkbox component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Checkbox.displayName = "Checkbox";
