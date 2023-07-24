import React from "react";
import classnames from "classnames";
import css from "./Header.module.scss";

export interface HeaderProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
  (props: HeaderProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Header)} ref={ref}>
        <p>Header component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Header.displayName = "Header";
