import React from "react";
import classnames from "classnames";
import css from "./Select.module.scss";

export interface SelectProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  (props: SelectProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Select)} ref={ref}>
        <p>Select component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Select.displayName = "Select";
