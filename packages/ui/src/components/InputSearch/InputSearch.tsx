import * as React from "react";
import classnames from "classnames";
import css from "./InputSearch.module.scss";

export interface InputSearchProps {
  children?: React.ReactNode;
}

export function InputSearch(props: InputSearchProps) {
  return (
    <div className={classnames(css.InputSearch)}>
      <p>InputSearch component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

InputSearch.displayName = "InputSearch";
