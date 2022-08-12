import * as React from "react";
import classnames from "classnames";
import css from "./Button.module.scss";

export interface ButtonProps {
  children?: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return (
    <div className={classnames(css.Button)}>
      <p>Button component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

Button.displayName = "Button";
