import * as React from "react";
import classnames from "classnames";
import css from "./Divider.module.scss";

export interface DividerProps {
  children?: React.ReactNode;
}

export function Divider(props: DividerProps) {
  return (
    <div {...props} className={classnames(css.Divider)}>
      <p>Divider component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

Divider.displayName = "Divider";
