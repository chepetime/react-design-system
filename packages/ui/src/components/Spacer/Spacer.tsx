import * as React from "react";
import classnames from "classnames";
import css from "./Spacer.module.scss";

export interface SpacerProps {
  children?: React.ReactNode;
}

export function Spacer(props: SpacerProps) {
  return (
    <div className={classnames(css.Spacer)}>
      <p>Spacer component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

Spacer.displayName = "Spacer";
