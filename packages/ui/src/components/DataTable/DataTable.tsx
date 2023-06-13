import React from "react";
import classnames from "classnames";
import css from "./DataTable.module.scss";

export interface DataTableProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const DataTable = React.forwardRef<HTMLDivElement, DataTableProps>(
  (props: DataTableProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.DataTable)} ref={ref}>
        <p>DataTable component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

DataTable.displayName = "DataTable";
