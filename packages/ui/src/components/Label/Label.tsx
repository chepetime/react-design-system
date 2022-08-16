import * as React from "react";
import classnames from "classnames";
import css from "./Label.module.scss";

export interface LabelProps {
  children?: React.ReactNode;
}

export function Label(props: LabelProps) {
  return (
    <div className={classnames(css.Label)}>
      <p>Label component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

Label.displayName = "Label";
