import React from "react";
import classnames from "classnames";
import css from "./Notification.module.scss";

export interface NotificationProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Notification = React.forwardRef<HTMLDivElement, NotificationProps>(
  (props: NotificationProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Notification)} ref={ref}>
        <p>Notification component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Notification.displayName = "Notification";
