import * as React from "react";
import classnames from "classnames";
import css from "./Item.module.scss";

export interface ItemProps {
  children?: React.ReactNode;
}

export const Item = React.forwardRef<HTMLDivElement, ItemProps>(
  (props: ItemProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Item)} ref={ref}>
        <p>Item component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Item.displayName = "Item";
