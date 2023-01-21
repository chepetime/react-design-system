import * as React from "react";
import classnames from "classnames";
import css from "./ButtonGroup.module.scss";

export interface ButtonGroupProps {
  children?: React.ReactNode;
}

export function ButtonGroup(props: ButtonGroupProps) {
  return (
    <div {...props} className={classnames(css.ButtonGroup)}>
      <p>ButtonGroup component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

ButtonGroup.displayName = "ButtonGroup";
