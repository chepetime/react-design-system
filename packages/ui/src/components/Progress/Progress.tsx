import * as React from "react";
import classnames from "classnames";
import css from "./Progress.module.scss";

export interface ProgressProps {
  children?: React.ReactNode;
}

export function Progress(props: ProgressProps) {
  return (
    <div className={classnames(css.Progress)}>
      <p>Progress component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

Progress.displayName = "Progress";
