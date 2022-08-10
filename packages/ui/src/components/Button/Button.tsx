import React from "react";
import classnames from "classnames";
import css from "./Button.module.scss";

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  type?: "main" | "secondary" | "plain";
  proportion?: "" | "small" | "medium" | "large";
  children?: React.ReactNode;
}

export function Button({
  children,
  type = "main",
  proportion = "",
}: ButtonProps) {
  return (
    <button
      type="button"
      className={classnames(css.Button, {
        [css[`Button--${type}`]]: true,
        [css[`Button--${proportion}`]]: true,
      })}
    >
      {children}
    </button>
  );
}
