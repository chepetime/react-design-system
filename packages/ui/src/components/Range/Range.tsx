import React from "react";
import classnames from "classnames";
import css from "./Range.module.scss";

export interface RangeProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Range = React.forwardRef<HTMLDivElement, RangeProps>(
  (props: RangeProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Range)} ref={ref}>
        <p>Range component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Range.displayName = "Range";
