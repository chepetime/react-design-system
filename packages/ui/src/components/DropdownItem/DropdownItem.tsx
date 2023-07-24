import React from "react";
import classnames from "classnames";
import css from "./DropdownItem.module.scss";

export interface DropdownItemProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const DropdownItem = React.forwardRef<HTMLDivElement, DropdownItemProps>(
  (props: DropdownItemProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.DropdownItem)} ref={ref}>
        <p>DropdownItem component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

DropdownItem.displayName = "DropdownItem";
