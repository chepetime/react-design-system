import * as React from "react";
import classnames from "classnames";
import css from "./Icon.module.scss";

export interface IconProps {
  children?: React.ReactNode;
}

export function Icon(props: IconProps) {
  return (
    <div className={classnames(css.Icon)}>
      <p>Icon component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

Icon.displayName = "Icon";
