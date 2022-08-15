import * as React from "react";
import classnames from "classnames";
import css from "./DexButton.module.scss";

export interface DexButtonProps {
  children?: React.ReactNode;
}

export function DexButton(props: DexButtonProps) {
  return (
    <button className={classnames(css.DexButton)}>{props.children}</button>
  );
}

DexButton.displayName = "DexButton";
