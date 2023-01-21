import * as React from "react";
import classnames from "classnames";
import css from "./Page.module.scss";

export interface PageProps {
  children?: React.ReactNode;
}

export function Page(props: PageProps) {
  return <div className={classnames(css.Page)}>{props.children}</div>;
}

Page.displayName = "Page";
