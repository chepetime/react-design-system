import * as React from "react";
import classnames from "classnames";
import css from "./AlertItem.module.scss";

export interface AlertItemProps {
  children?: React.ReactNode;
}

export const AlertItem = React.forwardRef<HTMLDivElement, AlertItemProps>(
  (props: AlertItemProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.AlertItem)} ref={ref}>
        <p>AlertItem component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

AlertItem.displayName = "AlertItem";
