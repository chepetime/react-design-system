import * as React from "react";
import classnames from "classnames";
import css from "./Item.module.scss";

export interface ItemProps {
  children?: React.ReactNode;
}

export function Item(props: ItemProps) {
  return (
    <div className={classnames(css.Item)}>
      <p>Item component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

Item.displayName = "Item";
