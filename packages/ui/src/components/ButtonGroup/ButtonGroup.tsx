import React from "react";
import classnames from "classnames";
import css from "./ButtonGroup.module.scss";

export interface ButtonGroupProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  (props: ButtonGroupProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.ButtonGroup)} ref={ref}>
        <p>ButtonGroup component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

ButtonGroup.displayName = "ButtonGroup";
