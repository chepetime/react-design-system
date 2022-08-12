import * as React from "react";
import classnames from "classnames";
import css from "./InputTimePicker.module.scss";

export interface InputTimePickerProps {
  children?: React.ReactNode;
}

export function InputTimePicker(props: InputTimePickerProps) {
  return (
    <div className={classnames(css.InputTimePicker)}>
      <p>InputTimePicker component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

InputTimePicker.displayName = "InputTimePicker";
