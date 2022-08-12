import * as React from "react";
import classnames from "classnames";
import css from "./InputRadioButtonGroup.module.scss";

export interface InputRadioButtonGroupProps {
  children?: React.ReactNode;
}

export function InputRadioButtonGroup(props: InputRadioButtonGroupProps) {
  return (
    <div className={classnames(css.InputRadioButtonGroup)}>
      <p>InputRadioButtonGroup component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

InputRadioButtonGroup.displayName = "InputRadioButtonGroup";
