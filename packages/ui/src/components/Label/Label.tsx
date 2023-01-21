import * as React from "react";
import classnames from "classnames";
import css from "./Label.module.scss";

export interface LabelProps extends React.ComponentPropsWithRef<"label"> {
  disabled?: boolean;
  readOnly?: boolean;
  for?: string;
  htmlFor?: string;
  children?: React.ReactNode;
}

export function Label({ for: htmlFor = "", ...props }: LabelProps) {
  return (
    <label htmlFor={htmlFor} {...props} className={classnames(css.Label)}>
      {props.children}
    </label>
  );
}

Label.displayName = "Label";
