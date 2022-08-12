import * as React from "react";
import classnames from "classnames";
import css from "./InputSelect.module.scss";

export interface InputSelectProps {
  children?: React.ReactNode;
}

export function InputSelect(props: InputSelectProps) {
  return (
    <div className={classnames(css.InputSelect)}>
      <p>InputSelect component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

InputSelect.displayName = "InputSelect";
