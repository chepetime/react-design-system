import * as React from "react";
import classnames from "classnames";
import css from "./Wrapper.module.scss";

export interface WrapperProps {
  children?: React.ReactNode;
}

export function Wrapper(props: WrapperProps) {
  return <div className={classnames(css.Wrapper)}>{props.children}</div>;
}

Wrapper.displayName = "Wrapper";
