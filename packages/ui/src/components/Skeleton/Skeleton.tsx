import React from "react";
import classnames from "classnames";
import css from "./Skeleton.module.scss";

export interface SkeletonProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  (props: SkeletonProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Skeleton)} ref={ref}>
        <p>Skeleton component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Skeleton.displayName = "Skeleton";
