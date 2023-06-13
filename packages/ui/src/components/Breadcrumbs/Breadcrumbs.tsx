import React from "react";
import classnames from "classnames";
import css from "./Breadcrumbs.module.scss";

export interface BreadcrumbsProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Breadcrumbs = React.forwardRef<HTMLDivElement, BreadcrumbsProps>(
  (props: BreadcrumbsProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Breadcrumbs)} ref={ref}>
        <p>Breadcrumbs component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Breadcrumbs.displayName = "Breadcrumbs";
