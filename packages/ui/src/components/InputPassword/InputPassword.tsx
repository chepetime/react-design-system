import React, { useRef, MutableRefObject } from "react";
import classnames from "classnames";
import css from "./InputPassword.module.scss";

export interface InputPasswordProps {
  children?: React.ReactNode;
}

export function InputPassword(props: InputPasswordProps) {
  return (
    <div {...props} className={classnames(css.InputPassword)}>
      <p>InputPassword component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

InputPassword.displayName = "InputPassword";
