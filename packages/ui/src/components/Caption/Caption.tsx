import * as React from "react";
import classnames from "classnames";
import css from "./Caption.module.scss";

export interface CaptionProps {
  children?: React.ReactNode;
}

export function Caption(props: CaptionProps) {
  return (
    <div className={classnames(css.Caption)}>
      <p>Caption component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

Caption.displayName = "Caption";
