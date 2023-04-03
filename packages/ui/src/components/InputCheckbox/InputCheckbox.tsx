import React from "react";
import classnames from "classnames";
import css from "./InputCheckbox.module.scss";

import { inputEvents } from "./../../types/input.types";

/**
 * Props for the InputText component
 * Extends React.ComponentPropsWithRef<"input"> to include all the standard input props
 * children?: React.ReactNode - optional children to be rendered within the button
 */
export interface InputCheckboxProps
  extends inputEvents,
    React.ComponentPropsWithRef<"input"> {
  id?: string;
  name?: string;
  value?: string;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
}

/**
 * A functional React component for an input
 */
export const InputCheckbox = React.forwardRef<
  HTMLInputElement,
  InputCheckboxProps
>(
  (
    {
      disabled = false,
      readOnly = false,
      name,
      label = "",
      onKeyDown,
      onKeyUp,
      onChange,
      onBlur,
      onFocus,
      ...props
    }: InputCheckboxProps,
    ref
  ) => {
    return (
      <div className={classnames(css.InputCheckbox)}>
        <input
          ref={ref}
          {...props}
          className={classnames(css.InputCheckbox)}
          id={name}
          name={name}
          type="checkbox"
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
        {label && (
          <label htmlFor={name} className={css.InputCheckboxLabel}>
            {label}
          </label>
        )}
      </div>
    );
  }
);

InputCheckbox.displayName = "InputCheckbox";
