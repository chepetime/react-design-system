import React from "react";
import classnames from "classnames";
import css from "./InputText.module.scss";

import {
  inputEvents,
  autoCompleteOptionsTypes,
  inputModeOptionsTypes,
} from "./../../types/input.types";

/**
 * Props for the InputText component
 * Extends React.ComponentPropsWithRef<"input"> to include all the standard input props
 * children?: React.ReactNode - optional children to be rendered within the button
 */
export interface InputTextProps
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

/**
 * A functional React component for an input
 */
export const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
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
    }: InputTextProps,
    ref
  ) => {
    return (
      <input
        ref={ref}
        {...props}
        className={classnames(css.InputText)}
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

InputText.displayName = "InputText";
