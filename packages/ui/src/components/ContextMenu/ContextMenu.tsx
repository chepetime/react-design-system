import React from "react";
import classnames from "classnames";
import css from "./ContextMenu.module.scss";

export interface ContextMenuProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const ContextMenu = React.forwardRef<HTMLDivElement, ContextMenuProps>(
  (props: ContextMenuProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.ContextMenu)} ref={ref}>
        <p>ContextMenu component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

ContextMenu.displayName = "ContextMenu";
