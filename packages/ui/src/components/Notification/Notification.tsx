import * as React from "react";
import classnames from "classnames";
import css from "./Notification.module.scss";

export interface NotificationProps {
  children?: React.ReactNode;
}

export function Notification(props: NotificationProps) {
  return (
    <div {...props} className={classnames(css.Notification)}>
      <p>Notification component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

Notification.displayName = "Notification";
