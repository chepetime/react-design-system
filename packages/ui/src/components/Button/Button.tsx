import * as React from "react";
import classnames from "classnames";
import css from "./Button.module.scss";

export type ButtonVariantType = "normal" | "ghost" | "text" | "link";

export type ButtonColorType =
  | "default"
  | "primary"
  | "secondary"
  | "warning"
  | "success"
  | "warning"
  | "error"
  | "info";

export type ButtonVariantSize = "small" | "medium" | "large";

/**
 * Props for the Button component
 * Extends React.ComponentPropsWithRef<"button"> to include all the standard button props
 * children?: React.ReactNode - optional children to be rendered within the button
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  block?: boolean;
  icon?: React.ReactNode | null;
  variant?: ButtonVariantType;
  color?: ButtonColorType;
  size?: ButtonVariantSize;
  children?: React.ReactNode;
}

/**
 * A functional React component for a button
 * @param props - an object containing the following properties:
 *                children: React.ReactNode - optional children to be rendered within the button
 *                any other props will be spread to the button element
 */

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "normal",
      color = "primary",
      size = "medium",
      block = false,
      icon = null,
      disabled = false,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        {...props}
        className={classnames(
          css.Button,
          css[`Button--${variant}`],
          css[`Button--${color}`],
          css[`Button--${size}`],
          {
            [css["Button--block"]]: block,
            [css["Button--icon"]]: icon !== null,
          }
        )}
        disabled={disabled}
        aria-disabled={disabled}
        {...props}
      >
        {props.children}
      </button>
    );
  }
);

Button.displayName = "Button"; // sets the component's display name to "Button" for debugging purposes
