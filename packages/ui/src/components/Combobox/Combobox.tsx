import React from "react";
import classnames from "classnames";
import css from "./Combobox.module.scss";

export interface ComboboxProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Combobox = React.forwardRef<HTMLDivElement, ComboboxProps>(
  (props: ComboboxProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Combobox)} ref={ref}>
        <p>Combobox component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Combobox.displayName = "Combobox";
