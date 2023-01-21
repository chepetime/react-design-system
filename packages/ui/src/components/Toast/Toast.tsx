import * as React from "react";
import classnames from "classnames";
import css from "./Toast.module.scss";

export interface ToastProps {
  children?: React.ReactNode;
}

export function Toast(props: ToastProps) {
  return (
    <div {...props} className={classnames(css.Toast)}>
      <p>Toast component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

Toast.displayName = "Toast";
