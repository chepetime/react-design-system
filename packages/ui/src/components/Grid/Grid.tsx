import * as React from "react";
import classnames from "classnames";
import css from "./Grid.module.scss";

export interface GridProps {
  children?: React.ReactNode;
}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  (props: GridProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Grid)} ref={ref}>
        <p>Grid component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Grid.displayName = "Grid";
