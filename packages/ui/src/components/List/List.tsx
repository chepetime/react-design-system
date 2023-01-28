import * as React from "react";
import classnames from "classnames";
import css from "./List.module.scss";

export interface ListProps {
  children?: React.ReactNode;
}

export const List = React.forwardRef<HTMLDivElement, ListProps>(
  (props: ListProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.List)} ref={ref}>
        <p>List component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

List.displayName = "List";
