import React from "react";
import classnames from "classnames";
import css from "./Collapsible.module.scss";

export interface CollapsibleProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Collapsible = React.forwardRef<HTMLDivElement, CollapsibleProps>(
  (props: CollapsibleProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Collapsible)} ref={ref}>
        <p>Collapsible component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Collapsible.displayName = "Collapsible";
