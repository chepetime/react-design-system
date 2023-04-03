import * as React from "react";
import classnames from "classnames";
import css from "./Container.module.scss";

export type ContainerProps = {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  fluid?: boolean;
  children?: React.ReactNode;
};

export const Container: React.FC<ContainerProps> = ({
  className,
  size = "md",
  fluid = false,
  children,
}) => {
  const containerClasses = classnames(css.Container, css[size], {
    [css.Fluid]: fluid,
  });

  return (
    <div className={classnames(containerClasses, className)}>{children}</div>
  );
};

Container.displayName = "Container";
