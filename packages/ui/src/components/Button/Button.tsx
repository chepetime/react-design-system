import React from "react";
import classnames from "classnames";
import css from "./Button.module.scss";

export interface ButtonProps {
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLDivElement, ButtonProps>(
  (props: ButtonProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Button)} ref={ref}>
        <p>Button component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Button.displayName = "Button";
