import * as React from "react";
import classnames from "classnames";
import css from "./Heading.module.scss";

export interface HeadingProps {
  children?: React.ReactNode;
}

export const Heading = React.forwardRef<HTMLDivElement, HeadingProps>(
  (props: HeadingProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Heading)} ref={ref}>
        <p>Heading component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Heading.displayName = "Heading";
