import * as React from "react";
import classnames from "classnames";
import css from "./AlertItem.module.scss";

export interface AlertItemProps {
  children?: React.ReactNode;
}

export function AlertItem(props: AlertItemProps) {
  return (
    <div {...props} className={classnames(css.AlertItem)}>
      <p>AlertItem component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

AlertItem.displayName = "AlertItem";
