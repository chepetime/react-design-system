import * as React from "react";
import classnames from "classnames";
import css from "./Progress.module.scss";

export interface ProgressProps {
  children?: React.ReactNode;
}

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  (props: ProgressProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Progress)} ref={ref}>
        <p>Progress component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Progress.displayName = "Progress";
