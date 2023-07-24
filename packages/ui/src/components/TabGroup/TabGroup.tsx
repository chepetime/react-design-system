import React from "react";
import classnames from "classnames";
import css from "./TabGroup.module.scss";

export interface TabGroupProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const TabGroup = React.forwardRef<HTMLDivElement, TabGroupProps>(
  (props: TabGroupProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.TabGroup)} ref={ref}>
        <p>TabGroup component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

TabGroup.displayName = "TabGroup";
