import React from "react";
import classnames from "classnames";
import css from "./Layout.module.scss";

export interface LayoutProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Layout = React.forwardRef<HTMLDivElement, LayoutProps>(
  (props: LayoutProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Layout)} ref={ref}>
        <p>Layout component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Layout.displayName = "Layout";
