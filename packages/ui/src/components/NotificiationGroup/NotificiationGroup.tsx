import React from "react";
import classnames from "classnames";
import css from "./NotificiationGroup.module.scss";

export interface NotificiationGroupProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const NotificiationGroup = React.forwardRef<HTMLDivElement, NotificiationGroupProps>(
  (props: NotificiationGroupProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.NotificiationGroup)} ref={ref}>
        <p>NotificiationGroup component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

NotificiationGroup.displayName = "NotificiationGroup";
