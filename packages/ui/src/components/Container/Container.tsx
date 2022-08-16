import * as React from "react";
import classnames from "classnames";
import css from "./Container.module.scss";

export interface ContainerProps {
  children?: React.ReactNode;
}

export function Container(props: ContainerProps) {
  return (
    <div className={classnames(css.Container)}>
      <p>Container component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

Container.displayName = "Container";
