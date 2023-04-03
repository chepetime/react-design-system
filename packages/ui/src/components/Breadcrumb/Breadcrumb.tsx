import React from "react";
import classnames from "classnames";
import css from "./Breadcrumb.module.scss";

export interface BreadcrumbProps {
  className?: string;
  children?: React.ReactNode;
}

export interface BreadcrumbElementProps {
  className?: string;
  children?: React.ReactNode;
  href?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ className, children }) => {
  return (
    <nav className={classnames(css.Breadcrumb, className)}>{children}</nav>
  );
};

const BreadcrumbElement: React.FC<BreadcrumbElementProps> = ({
  className,
  children,
  href,
}) => {
  return (
    <span className={classnames(css.BreadcrumbElement, className)}>
      {href ? <a href={href}>{children}</a> : children}
    </span>
  );
};

export { Breadcrumb, BreadcrumbElement };
