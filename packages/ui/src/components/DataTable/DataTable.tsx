import * as React from "react";
import classnames from "classnames";
import css from "./DataTable.module.scss";

export interface DataTableProps {
  children?: React.ReactNode;
}

export function DataTable(props: DataTableProps) {
  return (
    <div className={classnames(css.DataTable)}>
      <p>DataTable component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

DataTable.displayName = "DataTable";
