import React from "react";
import classnames from "classnames";
import css from "./NavigationMenu.module.scss";

export interface NavigationMenuProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const NavigationMenu = React.forwardRef<HTMLDivElement, NavigationMenuProps>(
  (props: NavigationMenuProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.NavigationMenu)} ref={ref}>
        <p>NavigationMenu component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

NavigationMenu.displayName = "NavigationMenu";
