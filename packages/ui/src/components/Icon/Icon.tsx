import * as React from "react";
import classnames from "classnames";
import css from "./Icon.module.scss";

export interface IconProps {
  children?: React.ReactNode;
}

export const Icon = React.forwardRef<HTMLDivElement, IconProps>(
  (props: IconProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Icon)} ref={ref}>
        <p>Icon component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Icon.displayName = "Icon";
