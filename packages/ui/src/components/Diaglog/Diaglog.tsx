import React from "react";
import classnames from "classnames";
import css from "./Diaglog.module.scss";

export interface DiaglogProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Diaglog = React.forwardRef<HTMLDivElement, DiaglogProps>(
  (props: DiaglogProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Diaglog)} ref={ref}>
        <p>Diaglog component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Diaglog.displayName = "Diaglog";
