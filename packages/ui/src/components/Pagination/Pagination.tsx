import * as React from "react";
import classnames from "classnames";
import css from "./Pagination.module.scss";

export interface PaginationProps {
  children?: React.ReactNode;
}

export function Pagination(props: PaginationProps) {
  return (
    <div className={classnames(css.Pagination)}>
      <p>Pagination component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

Pagination.displayName = "Pagination";
