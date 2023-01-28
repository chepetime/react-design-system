import * as React from "react";
import classnames from "classnames";
import css from "./ButtonDropdown.module.scss";

export interface ButtonDropdownProps {
  children?: React.ReactNode;
}

export const ButtonDropdown = React.forwardRef<HTMLDivElement, ButtonDropdownProps>(
  (props: ButtonDropdownProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.ButtonDropdown)} ref={ref}>
        <p>ButtonDropdown component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

ButtonDropdown.displayName = "ButtonDropdown";
