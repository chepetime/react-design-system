import React from "react";
import classnames from "classnames";
import css from "./Fieldsed.module.scss";

export interface FieldsedProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Fieldsed = React.forwardRef<HTMLDivElement, FieldsedProps>(
  (props: FieldsedProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Fieldsed)} ref={ref}>
        <p>Fieldsed component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Fieldsed.displayName = "Fieldsed";
