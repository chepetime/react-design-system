import * as React from "react";
import classnames from "classnames";
import css from "./InputCheckbox.module.scss";

export interface InputCheckboxProps {
  children?: React.ReactNode;
}

export function InputCheckbox(props: InputCheckboxProps) {
  return (
    <div className={classnames(css.InputCheckbox)}>
      <p>InputCheckbox component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

InputCheckbox.displayName = "InputCheckbox";
