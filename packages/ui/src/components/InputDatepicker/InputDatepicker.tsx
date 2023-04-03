import React from "react";
import classnames from "classnames";
import css from "./InputDatepicker.module.scss";

export interface InputDatepickerProps {
  children?: React.ReactNode;
}

export function InputDatepicker(props: InputDatepickerProps) {
  return (
    <div {...props} className={classnames(css.InputDatepicker)}>
      <p>InputDatepicker component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

InputDatepicker.displayName = "InputDatepicker";
