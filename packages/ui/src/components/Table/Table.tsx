import * as React from "react";
import classnames from "classnames";
import css from "./Table.module.scss";

export interface TableProps {
  children?: React.ReactNode;
}

export function Table(props: TableProps) {
  return (
    <div className={classnames(css.Table)}>
      <p>Table component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

Table.displayName = "Table";
