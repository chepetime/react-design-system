import * as React from "react";
import classnames from "classnames";
import css from "./Heading.module.scss";

export interface HeadingProps {
  children?: React.ReactNode;
}

export function Heading(props: HeadingProps) {
  return (
    <div className={classnames(css.Heading)}>
      <p>Heading component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

Heading.displayName = "Heading";
