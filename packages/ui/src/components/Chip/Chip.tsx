import * as React from "react";
import classnames from "classnames";
import css from "./Chip.module.scss";

export interface ChipProps {
  children?: React.ReactNode;
}

export function Chip(props: ChipProps) {
  return (
    <div className={classnames(css.Chip)}>
      <p>Chip component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

Chip.displayName = "Chip";
