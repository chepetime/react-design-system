import * as React from "react";
import classnames from "classnames";
import css from "./Collapse.module.scss";

export interface CollapseProps {
  children?: React.ReactNode;
}

export const Collapse = React.forwardRef<HTMLDivElement, CollapseProps>(
  (props: CollapseProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Collapse)} ref={ref}>
        <p>Collapse component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Collapse.displayName = "Collapse";
