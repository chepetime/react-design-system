import * as React from "react";
import classnames from "classnames";
import css from "./Toast.module.scss";

export interface ToastProps {
  children?: React.ReactNode;
}

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  (props: ToastProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Toast)} ref={ref}>
        <p>Toast component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Toast.displayName = "Toast";
