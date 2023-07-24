import React from "react";
import classnames from "classnames";
import css from "./Navigation.module.scss";

export interface NavigationProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Navigation = React.forwardRef<HTMLDivElement, NavigationProps>(
  (props: NavigationProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Navigation)} ref={ref}>
        <p>Navigation component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Navigation.displayName = "Navigation";
