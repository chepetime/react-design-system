import React from "react";
import classnames from "classnames";
import css from "./Tabs.module.scss";

export interface TabsProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  (props: TabsProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Tabs)} ref={ref}>
        <p>Tabs component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Tabs.displayName = "Tabs";
