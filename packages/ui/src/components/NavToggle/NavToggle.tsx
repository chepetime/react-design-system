import React from "react";
import classnames from "classnames";
import css from "./NavToggle.module.scss";

export interface NavToggleProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const NavToggle = React.forwardRef<HTMLDivElement, NavToggleProps>(
  (props: NavToggleProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.NavToggle)} ref={ref}>
        <p>NavToggle component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

NavToggle.displayName = "NavToggle";
