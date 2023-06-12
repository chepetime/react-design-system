import React from "react";
import classnames from "classnames";
import css from "./Input.module.scss";

import {
  inputEvents,
  autoCompleteOptionsTypes,
  inputModeOptionsTypes,
} from "./Input.types";

export interface InputProps
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
  error?: boolean;
}

/**
 * Props for the InputText component
 * Extends React.ComponentPropsWithRef<"input"> to include all the standard input props
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      autocomplete = "off",
      disabled = false,
      readOnly = false,
      inputmode = "text",
      name,
      type = "text",
      error = false,
      ...props
    }: InputProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    return (
      <input
        ref={ref}
        className={classnames(css.Input, {
          [css[`error`]]: error,
        })}
        id={name}
        name={name}
        type={type}
        autoComplete={autocomplete}
        inputMode={inputmode}
        disabled={disabled}
        readOnly={readOnly}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
