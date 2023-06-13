import React from "react";
import classnames from "classnames";
import css from "./Badge.module.scss";

export interface BadgeProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  (props: BadgeProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Badge)} ref={ref}>
        <p>Badge component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Badge.displayName = "Badge";
