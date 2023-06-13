import React from "react";
import classnames from "classnames";
import css from "./Alert.module.scss";

export interface AlertProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (props: AlertProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Alert)} ref={ref}>
        <p>Alert component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Alert.displayName = "Alert";
