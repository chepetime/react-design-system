import * as React from "react";
import classnames from "classnames";
import css from "./Paper.module.scss";

export interface PaperProps {
  children?: React.ReactNode;
}

export function Paper(props: PaperProps) {
  return (
    <div className={classnames(css.Paper)}>
      <p>Paper component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

Paper.displayName = "Paper";
