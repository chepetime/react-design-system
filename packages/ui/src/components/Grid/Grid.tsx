import * as React from "react";
import classnames from "classnames";
import css from "./Grid.module.scss";

export interface GridProps {
  children?: React.ReactNode;
  container?: boolean;
  item?: boolean;
  cols?: number | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  gap?: "sm" | "md" | "lg" | "none";
}

export function Grid({
  container = true,
  item = false,
  cols,
  gap = "md",
  ...props
}: GridProps) {
  return (
    <div
      className={classnames(
        css.Grid,
        css[`Columns--${cols}`],
        css[`Grid--gap-${gap}`],
        {
          [css.Container]: container && !item,
          [css.Item]: !container || item,
        }
      )}
    >
      {props.children}
    </div>
  );
}

Grid.displayName = "Grid";
