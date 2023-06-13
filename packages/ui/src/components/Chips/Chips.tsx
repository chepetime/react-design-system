import React from "react";
import classnames from "classnames";
import css from "./Chips.module.scss";

export interface ChipsProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Chips = React.forwardRef<HTMLDivElement, ChipsProps>(
  (props: ChipsProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Chips)} ref={ref}>
        <p>Chips component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Chips.displayName = "Chips";
