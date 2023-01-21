import * as React from "react";
import classnames from "classnames";
import css from "./InputHint.module.scss";

export interface InputHintProps {
  children?: React.ReactNode;
}

export function InputHint(props: InputHintProps) {
  return (
    <div {...props} className={classnames(css.InputHint)}>
      <span>{props.children}</span>
    </div>
  );
}

InputHint.displayName = "InputHint";
