import * as React from "react";
import classnames from "classnames";
import css from "./Button.module.scss";

export interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
  children?: React.ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={classnames(css.Button)}
      aria-disabled={props.disabled || false}
    >
      {children}
    </button>
  );
}

Button.displayName = "Button";
