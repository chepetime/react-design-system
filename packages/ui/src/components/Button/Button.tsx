import * as React from "react";
import classnames from "classnames";
import css from "./Button.module.scss";

/**
 * Props for the Button component
 * Extends React.ComponentPropsWithRef<"button"> to include all the standard button props
 * children?: React.ReactNode - optional children to be rendered within the button
 */
export interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
  children?: React.ReactNode;
}

/**
 * A functional React component for a button
 * @param props - an object containing the following properties:
 *                children: React.ReactNode - optional children to be rendered within the button
 *                any other props will be spread to the button element
 */

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={classnames(css.Button)}
        aria-disabled={props.disabled || false}
      >
        {props.children}
      </button>
    );
  }
);

Button.displayName = "Button"; // sets the component's display name to "Button" for debugging purposes
