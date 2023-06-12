import React from "react";
import classnames from "classnames";
import css from "./Button.module.scss";

export type ButtonVariantType = "default" | "ghost" | "text" | "link";

export type ButtonColorType =
  | "primary"
  | "secondary"
  | "warning"
  | "success"
  | "warning"
  | "error"
  | "info";

export type ButtonVariantSize = "small" | "default" | "large";

export interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
  variant?: ButtonVariantType;
  color?: ButtonColorType;
  size?: ButtonVariantSize;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "default",
      color = "primary",
      size = "default",
      ...props
    }: ButtonProps,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    const buttonClasses = classnames(
      css.Button,
      css[`Button--${variant}`],
      css[`Button--${color}`],
      css[`Button--${size}`]
    );

    return (
      <button className={buttonClasses} ref={ref} {...props}>
        {props.children}
      </button>
    );
  }
);

Button.displayName = "Button";
