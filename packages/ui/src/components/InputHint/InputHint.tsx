import React from "react";
import classnames from "classnames";
import css from "./InputHint.module.scss";

export interface InputHintProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const InputHint = React.forwardRef<HTMLDivElement, InputHintProps>(
  (props: InputHintProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.InputHint)} ref={ref}>
        {props.children}
      </div>
    );
  }
);

InputHint.displayName = "InputHint";
