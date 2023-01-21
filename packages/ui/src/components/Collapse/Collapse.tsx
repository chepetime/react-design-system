import * as React from "react";
import classnames from "classnames";
import css from "./Collapse.module.scss";

export interface CollapseProps {
  children?: React.ReactNode;
}

export function Collapse(props: CollapseProps) {
  return (
    <div {...props} className={classnames(css.Collapse)}>
      <p>Collapse component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

Collapse.displayName = "Collapse";
