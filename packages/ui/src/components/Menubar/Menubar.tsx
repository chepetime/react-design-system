import React from "react";
import classnames from "classnames";
import css from "./Menubar.module.scss";

export interface MenubarProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Menubar = React.forwardRef<HTMLDivElement, MenubarProps>(
  (props: MenubarProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Menubar)} ref={ref}>
        <p>Menubar component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Menubar.displayName = "Menubar";
