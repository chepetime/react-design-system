import * as React from "react";
import classnames from "classnames";
import css from "./Tooltip.module.scss";

export interface TooltipProps {
  children?: React.ReactNode;
}

export function Tooltip(props: TooltipProps) {
  return (
    <div className={classnames(css.Tooltip)}>
      <p>Tooltip component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

Tooltip.displayName = "Tooltip";
