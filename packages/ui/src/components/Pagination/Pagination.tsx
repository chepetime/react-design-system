import React from "react";
import classnames from "classnames";
import css from "./Pagination.module.scss";

export interface PaginationProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  (props: PaginationProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Pagination)} ref={ref}>
        <p>Pagination component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Pagination.displayName = "Pagination";
