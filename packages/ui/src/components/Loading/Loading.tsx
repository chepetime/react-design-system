import * as React from "react";
import classnames from "classnames";
import css from "./Loading.module.scss";

export interface LoadingProps {
  children?: React.ReactNode;
}

export function Loading(props: LoadingProps) {
  return (
    <div className={classnames(css.Loading)}>
      <p>Loading component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

Loading.displayName = "Loading";
