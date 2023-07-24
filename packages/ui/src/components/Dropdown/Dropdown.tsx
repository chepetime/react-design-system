import React from "react";
import classnames from "classnames";
import css from "./Dropdown.module.scss";

export interface DropdownProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  (props: DropdownProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Dropdown)} ref={ref}>
        <p>Dropdown component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Dropdown.displayName = "Dropdown";
