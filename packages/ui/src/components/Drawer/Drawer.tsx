import React from "react";
import classnames from "classnames";
import css from "./Drawer.module.scss";

export interface DrawerProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  (props: DrawerProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Drawer)} ref={ref}>
        <p>Drawer component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Drawer.displayName = "Drawer";
