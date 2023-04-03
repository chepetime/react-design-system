import * as React from "react";
import classnames from "classnames";
import css from "./Progress.module.scss";

export interface ProgressProps {
  /** The value of the progress bar. Must be between 0 and 100. */
  value: number;
}

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ value, ...props }: ProgressProps, ref: React.Ref<HTMLDivElement>) => {
    const percent = `${value}%`;

    return (
      <div {...props} className={classnames(css.Progress)} ref={ref}>
        <div className={css.Bar} style={{ width: percent }}></div>
      </div>
    );
  }
);

Progress.displayName = "Progress";
