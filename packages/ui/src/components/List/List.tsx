import * as React from "react";
import classnames from "classnames";
import css from "./List.module.scss";

export interface ListProps {
  children?: React.ReactNode;
}

export function List(props: ListProps) {
  return (
    <div className={classnames(css.List)}>
      <p>List component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

List.displayName = "List";
