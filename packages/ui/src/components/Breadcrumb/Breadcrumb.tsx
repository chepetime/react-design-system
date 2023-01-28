import * as React from "react";
import classnames from "classnames";
import css from "./Breadcrumb.module.scss";

export interface BreadcrumbProps {
  children?: React.ReactNode;
}

export const Breadcrumb = React.forwardRef<HTMLDivElement, BreadcrumbProps>(
  (props: BreadcrumbProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Breadcrumb)} ref={ref}>
        <p>Breadcrumb component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Breadcrumb.displayName = "Breadcrumb";
