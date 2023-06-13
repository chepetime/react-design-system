import React from "react";
import classnames from "classnames";
import css from "./Popover.module.scss";

export interface PopoverProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(
  (props: PopoverProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Popover)} ref={ref}>
        <p>Popover component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Popover.displayName = "Popover";
