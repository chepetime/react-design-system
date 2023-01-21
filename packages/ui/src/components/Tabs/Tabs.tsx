import * as React from "react";
import classnames from "classnames";
import css from "./Tabs.module.scss";

export interface TabsProps {
  children?: React.ReactNode;
}

export function Tabs(props: TabsProps) {
  return (
    <div {...props} className={classnames(css.Tabs)}>
      <p>Tabs component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

Tabs.displayName = "Tabs";
