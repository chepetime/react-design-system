import React from "react";
import classnames from "classnames";
import css from "./Separator.module.scss";

export interface SeparatorProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  (props: SeparatorProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Separator)} ref={ref}>
        <p>Separator component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Separator.displayName = "Separator";
