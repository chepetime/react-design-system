import React from "react";
import classnames from "classnames";
import css from "./Label.module.scss";

export interface LabelProps extends React.ComponentPropsWithRef<"label"> {
  disabled?: boolean;
  readOnly?: boolean;
  for?: string;
  htmlFor?: string;
  children?: React.ReactNode;
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  (
    { for: htmlFor = "", ...props }: LabelProps,
    ref: React.Ref<HTMLLabelElement>
  ) => {
    return (
      <label
        htmlFor={htmlFor}
        {...props}
        className={classnames(css.Label)}
        ref={ref}
      >
        {props.children}
      </label>
    );
  }
);

Label.displayName = "Label";
