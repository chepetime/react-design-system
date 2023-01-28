import * as React from "react";
import classnames from "classnames";
import css from "./Container.module.scss";

export interface ContainerProps {
  children?: React.ReactNode;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  (props: ContainerProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Container)} ref={ref}>
        <p>Container component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Container.displayName = "Container";
