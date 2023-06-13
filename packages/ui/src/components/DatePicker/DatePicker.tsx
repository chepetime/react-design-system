import React from "react";
import classnames from "classnames";
import css from "./DatePicker.module.scss";

export interface DatePickerProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const DatePicker = React.forwardRef<HTMLDivElement, DatePickerProps>(
  (props: DatePickerProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.DatePicker)} ref={ref}>
        <p>DatePicker component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

DatePicker.displayName = "DatePicker";
