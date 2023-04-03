import * as React from "react";
import classnames from "classnames";
import css from "./Grid.module.scss";

export interface GridProps {
  className?: string;
  columns?: number;
  rows?: number;
  gap?: number;
  debug?: boolean;
  children: React.ReactNode;
}

export const Grid: React.FC<GridProps> = ({
  className,
  columns = 1,
  rows = 1,
  gap = 0,
  debug = false,
  children,
}) => {
  const gridTemplateColumns = `repeat(${columns}, 1fr)`;
  const gridTemplateRows = `repeat(${rows}, 1fr)`;
  const gridGap = `${gap}px`;

  return (
    <div
      className={classnames(css.Grid, className, { [css.Debug]: debug })}
      style={{ gridTemplateColumns, gridTemplateRows, gridGap }}
    >
      {children}
    </div>
  );
};

Grid.displayName = "Grid"; // sets the component's display name to "Grid" for debugging purposes
