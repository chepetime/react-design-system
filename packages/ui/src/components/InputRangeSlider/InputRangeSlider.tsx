import * as React from "react";
import classnames from "classnames";
import css from "./InputRangeSlider.module.scss";

export interface InputRangeSliderProps {
  children?: React.ReactNode;
}

export function InputRangeSlider(props: InputRangeSliderProps) {
  return (
    <div {...props} className={classnames(css.InputRangeSlider)}>
      <p>InputRangeSlider component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

InputRangeSlider.displayName = "InputRangeSlider";
