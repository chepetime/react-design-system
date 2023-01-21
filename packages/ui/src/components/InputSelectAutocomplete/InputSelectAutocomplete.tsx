import * as React from "react";
import classnames from "classnames";
import css from "./InputSelectAutocomplete.module.scss";

export interface InputSelectAutocompleteProps {
  children?: React.ReactNode;
}

export function InputSelectAutocomplete(props: InputSelectAutocompleteProps) {
  return (
    <div {...props} className={classnames(css.InputSelectAutocomplete)}>
      <p>InputSelectAutocomplete component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

InputSelectAutocomplete.displayName = "InputSelectAutocomplete";
