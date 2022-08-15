import * as React from "react";
import classnames from "classnames";
import css from "./Button.module.scss";

export interface ButtonProps {
  children?: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return <button className={classnames(css.Button)}>{props.children}</button>;
}

Button.displayName = "Button";
