import * as React from "react";
import classnames from "classnames";
import css from "./Switch.module.scss";

export interface SwitchProps {
  children?: React.ReactNode;
}

export function Switch(props: SwitchProps) {
  return (
    <div className={classnames(css.Switch)}>
      <p>Switch</p>
      <div>{props.children}</div>
    </div>
  );
}

Switch.displayName = "Switch";
