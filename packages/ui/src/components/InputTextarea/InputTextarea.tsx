import React from "react";
import classnames from "classnames";
import css from "./InputTextarea.module.scss";

/**
 * Props for the InputTextarea component
 * Extends React.ComponentPropsWithRef<"input"> to include all the standard input props
 * children?: React.ReactNode - optional children to be rendered within the button
 */
export interface InputTextareaProps
  extends React.ComponentPropsWithRef<"textarea"> {
  alt?: string;

  disabled?: boolean;
  form?: string;

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
export const InputTextarea = React.forwardRef<
  HTMLTextAreaElement,
  InputTextareaProps
>(
  (
    {
      disabled = false,
      readOnly = false,
      name,
      onKeyDown,
      onKeyUp,
      onChange,
      onBlur,
      onFocus,
      ...props
    }: InputTextareaProps,
    ref
  ) => {
    return (
      <textarea
        ref={ref}
        {...props}
        className={classnames(css.InputTextarea)}
        id={name}
        name={name}
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

InputTextarea.displayName = "InputTextarea";
