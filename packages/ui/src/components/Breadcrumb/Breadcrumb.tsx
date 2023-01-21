import * as React from "react";
import classnames from "classnames";
import css from "./Breadcrumb.module.scss";

export interface BreadcrumbProps {
  children?: React.ReactNode;
}

export function Breadcrumb(props: BreadcrumbProps) {
  return (
    <div {...props} className={classnames(css.Breadcrumb)}>
      <p>Breadcrumb component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

Breadcrumb.displayName = "Breadcrumb";
