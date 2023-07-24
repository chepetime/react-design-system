import React from "react";
import classnames from "classnames";
import css from "./EmptyState.module.scss";

export interface EmptyStateProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  (props: EmptyStateProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.EmptyState)} ref={ref}>
        <p>EmptyState component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

EmptyState.displayName = "EmptyState";
