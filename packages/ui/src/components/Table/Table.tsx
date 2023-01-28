import * as React from "react";
import classnames from "classnames";
import css from "./Table.module.scss";

export interface TableProps {
  children?: React.ReactNode;
}

export const Table = React.forwardRef<HTMLDivElement, TableProps>(
  (props: TableProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Table)} ref={ref}>
        <p>Table component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Table.displayName = "Table";
