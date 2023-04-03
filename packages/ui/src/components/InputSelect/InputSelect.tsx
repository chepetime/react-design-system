import React from "react";
import classnames from "classnames";
import css from "./InputSelect.module.scss";

/**
 * Props for the InputSelect component
 */
export interface InputSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Array<{
    label: string;
    value: string;
    disabled?: boolean;
  }>;
}

/**
 * A functional React component for a select input
 */

export const InputSelect = React.forwardRef<
  HTMLSelectElement,
  InputSelectProps
>(({ options, ...props }: InputSelectProps, ref) => {
  return (
    <select className={classnames(css.InputSelect)} {...props} ref={ref}>
      {options.map(({ label, value, disabled }, index) => (
        <option key={index} value={value} disabled={disabled}>
          {label}
        </option>
      ))}
    </select>
  );
});

InputSelect.displayName = "InputSelect";
