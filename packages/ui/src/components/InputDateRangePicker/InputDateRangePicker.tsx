import * as React from "react";
import classnames from "classnames";
import css from "./InputDateRangePicker.module.scss";

export interface InputDateRangePickerProps {
  children?: React.ReactNode;
}

export function InputDateRangePicker(props: InputDateRangePickerProps) {
  return (
    <div className={classnames(css.InputDateRangePicker)}>
      <p>InputDateRangePicker component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

InputDateRangePicker.displayName = "InputDateRangePicker";
