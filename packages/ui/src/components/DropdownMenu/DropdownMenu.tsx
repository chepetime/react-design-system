import React from "react";
import classnames from "classnames";
import css from "./DropdownMenu.module.scss";

export interface DropdownMenuProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const DropdownMenu = React.forwardRef<HTMLDivElement, DropdownMenuProps>(
  (props: DropdownMenuProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.DropdownMenu)} ref={ref}>
        <p>DropdownMenu component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

DropdownMenu.displayName = "DropdownMenu";
