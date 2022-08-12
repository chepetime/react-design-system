import * as React from "react";
import classnames from "classnames";
import css from "./Grid.module.scss";

export interface GridProps {
  children?: React.ReactNode;
}

export function Grid(props: GridProps) {
  return (
    <div className={classnames(css.Grid)}>
      <p>Grid component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

Grid.displayName = "Grid";
