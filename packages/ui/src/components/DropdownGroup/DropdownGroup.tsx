import React from "react";
import classnames from "classnames";
import css from "./DropdownGroup.module.scss";

export interface DropdownGroupProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const DropdownGroup = React.forwardRef<HTMLDivElement, DropdownGroupProps>(
  (props: DropdownGroupProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.DropdownGroup)} ref={ref}>
        <p>DropdownGroup component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

DropdownGroup.displayName = "DropdownGroup";
