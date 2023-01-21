import * as React from "react";
import classnames from "classnames";
import css from "./Link.module.scss";

export interface LinkProps {
  children?: React.ReactNode;
}

export function Link(props: LinkProps) {
  return (
    <div {...props} className={classnames(css.Link)}>
      <p>Link component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

Link.displayName = "Link";
