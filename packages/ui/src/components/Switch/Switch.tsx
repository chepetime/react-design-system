import React from "react";
import classnames from "classnames";
import css from "./Switch.module.scss";

export interface SwitchProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Switch = React.forwardRef<HTMLDivElement, SwitchProps>(
  (props: SwitchProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Switch)} ref={ref}>
        <p>Switch component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Switch.displayName = "Switch";
