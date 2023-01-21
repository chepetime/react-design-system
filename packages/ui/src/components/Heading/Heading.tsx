import * as React from "react";
import classnames from "classnames";
import css from "./Heading.module.scss";

export interface HeadingProps {
  children?: React.ReactNode;
}

export function Heading(props: HeadingProps) {
  return <h1 className={classnames(css.Heading)}>{props.children}</h1>;
}

Heading.displayName = "Heading";
