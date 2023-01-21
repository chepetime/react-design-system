import * as React from "react";
import classnames from "classnames";
import css from "./ButtonDropdown.module.scss";

export interface ButtonDropdownProps {
  children?: React.ReactNode;
}

export function ButtonDropdown(props: ButtonDropdownProps) {
  return (
    <div {...props} className={classnames(css.ButtonDropdown)}>
      <p>ButtonDropdown component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

ButtonDropdown.displayName = "ButtonDropdown";
