import * as React from "react";
import classnames from "classnames";
import css from "./InputText.module.scss";

export interface InputTextProps {
  children?: React.ReactNode;
}

export function InputText(props: InputTextProps) {
  return (
    <div className={classnames(css.InputText)}>
      <p>InputText component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

InputText.displayName = "InputText";
