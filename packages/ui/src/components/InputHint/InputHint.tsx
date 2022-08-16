import * as React from "react";
import classnames from "classnames";
import css from "./InputHint.module.scss";

export interface InputHintProps {
  children?: React.ReactNode;
}

export function InputHint(props: InputHintProps) {
  return (
    <div className={classnames(css.InputHint)}>
      <p>InputHint component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

InputHint.displayName = "InputHint";
