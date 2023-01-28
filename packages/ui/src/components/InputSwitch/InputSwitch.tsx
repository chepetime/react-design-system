import React from "react";
import classnames from "classnames";
import css from "./InputSwitch.module.scss";

import {
  inputEvents,
  autoCompleteOptionsTypes,
  inputModeOptionsTypes,
} from "./../../types/input.types";

export interface InputSwitchProps
  extends inputEvents,
    React.ComponentPropsWithRef<"input"> {
  alt?: string;
  autocomplete?: autoCompleteOptionsTypes;
  disabled?: boolean;
  form?: string;
  inputmode?: inputModeOptionsTypes;
  max?: number | string;
  maxLength?: number;
  min?: number | string;
  minLength?: number;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  type?: string;
  value?: string | string[] | number;
}

export const InputSwitch = React.forwardRef<HTMLInputElement, InputSwitchProps>(
  (
    {
      autocomplete = "off",
      disabled = false,
      readOnly = false,
      inputmode = "text",
      name,
      type = "text",

      onKeyDown,
      onKeyUp,
      onChange,
      onBlur,
      onFocus,

      ...props
    }: InputSwitchProps,
    ref
  ) => {
    return (
      <input
        {...props}
        className={classnames(css.InputSwitch)}
        ref={ref}
        id={name}
        name={name}
        type={type}
        autoComplete={autocomplete}
        inputMode={inputmode}
        disabled={disabled}
        readOnly={readOnly}
        onKeyDown={onKeyDown && ((event) => onKeyDown(event))}
        onKeyUp={onKeyUp && ((event) => onKeyUp(event))}
        onChange={
          onChange &&
          ((event) => {
            onChange(event);
          })
        }
        onBlur={onBlur && ((event) => onBlur(event))}
        onFocus={onFocus && ((event) => onFocus(event))}
      />
    );
  }
);

InputSwitch.displayName = "InputSwitch";
