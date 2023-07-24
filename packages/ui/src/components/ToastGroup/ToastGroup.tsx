import React from "react";
import classnames from "classnames";
import css from "./ToastGroup.module.scss";

export interface ToastGroupProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const ToastGroup = React.forwardRef<HTMLDivElement, ToastGroupProps>(
  (props: ToastGroupProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.ToastGroup)} ref={ref}>
        <p>ToastGroup component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

ToastGroup.displayName = "ToastGroup";
