import React from "react";
import classnames from "classnames";
import css from "./Tab.module.scss";

export interface TabProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Tab = React.forwardRef<HTMLDivElement, TabProps>(
  (props: TabProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Tab)} ref={ref}>
        <p>Tab component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Tab.displayName = "Tab";
