import React from "react";
import classnames from "classnames";
import css from "./NavItem.module.scss";

export interface NavItemProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const NavItem = React.forwardRef<HTMLDivElement, NavItemProps>(
  (props: NavItemProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.NavItem)} ref={ref}>
        <p>NavItem component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

NavItem.displayName = "NavItem";
