import * as React from "react";
import classnames from "classnames";
import css from "./InputTextarea.module.scss";

export interface InputTextareaProps {
  children?: React.ReactNode;
}

export function InputTextarea(props: InputTextareaProps) {
  return (
    <div className={classnames(css.InputTextarea)}>
      <p>InputTextarea component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

InputTextarea.displayName = "InputTextarea";
