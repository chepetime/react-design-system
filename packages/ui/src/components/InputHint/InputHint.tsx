import React from "react";
import classnames from "classnames";
import css from "./InputHint.module.scss";

export type HintType = "default" | "success" | "warning" | "error" | "info";

export interface InputHintProps {
  type?: HintType;
  children?: React.ReactNode;
}

export function InputHint({ type = "default", ...props }: InputHintProps) {
  return (
    <div {...props} className={classnames(css.InputHint, css[type])}>
      <span>{props.children}</span>
    </div>
  );
}

InputHint.displayName = "InputHint";
