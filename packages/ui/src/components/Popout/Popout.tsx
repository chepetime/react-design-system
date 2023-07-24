import React from "react";
import classnames from "classnames";
import css from "./Popout.module.scss";

export interface PopoutProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Popout = React.forwardRef<HTMLDivElement, PopoutProps>(
  (props: PopoutProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Popout)} ref={ref}>
        <p>Popout component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Popout.displayName = "Popout";
