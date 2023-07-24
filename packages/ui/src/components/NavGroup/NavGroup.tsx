import React from "react";
import classnames from "classnames";
import css from "./NavGroup.module.scss";

export interface NavGroupProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const NavGroup = React.forwardRef<HTMLDivElement, NavGroupProps>(
  (props: NavGroupProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.NavGroup)} ref={ref}>
        <p>NavGroup component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

NavGroup.displayName = "NavGroup";
