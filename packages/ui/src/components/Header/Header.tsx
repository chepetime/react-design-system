import * as React from "react";
import classnames from "classnames";
import css from "./Header.module.scss";

export interface HeaderProps {
  children?: React.ReactNode;
}

export function Header(props: HeaderProps) {
  return (
    <div {...props} className={classnames(css.Header)}>
      <p>Header component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

Header.displayName = "Header";
