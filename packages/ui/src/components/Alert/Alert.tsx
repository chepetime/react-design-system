import * as React from "react";
import classnames from "classnames";
import css from "./Alert.module.scss";

export interface AlertProps {
  children?: React.ReactNode;
}

export function Alert(props: AlertProps) {
  return (
    <div className={classnames(css.Alert)}>
      <p>Alert component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

Alert.displayName = "Alert";
