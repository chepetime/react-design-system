import * as React from "react";
import classnames from "classnames";
import css from "./Spacer.module.scss";

export interface SpacerProps {
  children?: React.ReactNode;
}

export function Spacer(props: SpacerProps) {
  return <div {...props} className={classnames(css.Spacer)} />;
}

Spacer.displayName = "Spacer";
