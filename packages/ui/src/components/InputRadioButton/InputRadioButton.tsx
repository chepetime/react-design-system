import React, { useRef, MutableRefObject } from "react";
import classnames from "classnames";
import css from "./InputRadioButton.module.scss";

export interface InputRadioButtonProps {
  children?: React.ReactNode;
}

export function InputRadioButton(props: InputRadioButtonProps) {
  return (
    <div {...props} className={classnames(css.InputRadioButton)}>
      <p>InputRadioButton component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

InputRadioButton.displayName = "InputRadioButton";
