import React from "react";
import classnames from "classnames";
import css from "./HoverCard.module.scss";

export interface HoverCardProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const HoverCard = React.forwardRef<HTMLDivElement, HoverCardProps>(
  (props: HoverCardProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.HoverCard)} ref={ref}>
        <p>HoverCard component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

HoverCard.displayName = "HoverCard";
