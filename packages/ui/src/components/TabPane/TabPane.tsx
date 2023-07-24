import React from "react";
import classnames from "classnames";
import css from "./TabPane.module.scss";

export interface TabPaneProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const TabPane = React.forwardRef<HTMLDivElement, TabPaneProps>(
  (props: TabPaneProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.TabPane)} ref={ref}>
        <p>TabPane component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

TabPane.displayName = "TabPane";
