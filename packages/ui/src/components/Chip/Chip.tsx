import * as React from "react";
import classnames from "classnames";
import css from "./Chip.module.scss";

export interface ChipProps {
  children?: React.ReactNode;
}

export const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  (props: ChipProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Chip)} ref={ref}>
        <p>Chip component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Chip.displayName = "Chip";
