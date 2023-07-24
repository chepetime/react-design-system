import React from "react";
import classnames from "classnames";
import css from "./Divider.module.scss";

export interface DividerProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  (props: DividerProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Divider)} ref={ref}>
        <p>Divider component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Divider.displayName = "Divider";
