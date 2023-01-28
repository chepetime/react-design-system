import * as React from "react";
import classnames from "classnames";
import css from "./Loading.module.scss";

export interface LoadingProps {
  children?: React.ReactNode;
}

export const Loading = React.forwardRef<HTMLDivElement, LoadingProps>(
  (props: LoadingProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Loading)} ref={ref}>
        <p>Loading component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Loading.displayName = "Loading";
