import * as React from "react";
import classnames from "classnames";
import css from "./InputSwitch.module.scss";

export interface InputSwitchProps {
  children?: React.ReactNode;
}

export function InputSwitch(props: InputSwitchProps) {
  return (
    <div className={classnames(css.InputSwitch)}>
      <p>InputSwitch component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

InputSwitch.displayName = "InputSwitch";
