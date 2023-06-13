import React from "react";
import classnames from "classnames";
import css from "./InputPassword.module.scss";

export interface InputPasswordProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const InputPassword = React.forwardRef<HTMLDivElement, InputPasswordProps>(
  (props: InputPasswordProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.InputPassword)} ref={ref}>
        <p>InputPassword component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

InputPassword.displayName = "InputPassword";
