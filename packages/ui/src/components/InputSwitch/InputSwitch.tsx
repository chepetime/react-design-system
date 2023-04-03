import React from "react";
import classnames from "classnames";
import css from "./InputSwitch.module.scss";

/**
 * Props for the InputSwitch component
 * Extends React.ComponentPropsWithRef<"input"> to include all the standard input props
 * children?: React.ReactNode - optional children to be rendered within the button
 */
export type InputSwitchProps = React.ComponentPropsWithRef<"input">;

/**
 * A functional React component for a switch input
 */
export const InputSwitch = React.forwardRef<HTMLInputElement, InputSwitchProps>(
  ({ id, className, ...props }: InputSwitchProps, ref) => {
    return (
      <div className={classnames(css.InputSwitchWrapper, className)}>
        <label htmlFor={id} className={css.InputSwitchSwitch}>
          <input
            type="checkbox"
            id={id}
            ref={ref}
            {...props}
            className={classnames(css.InputSwitchInput)}
          />
          <span className={css.InputSwitchSlider} />
        </label>
      </div>
    );
  }
);

InputSwitch.displayName = "InputSwitch";
