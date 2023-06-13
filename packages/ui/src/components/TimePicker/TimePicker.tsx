import React from "react";
import classnames from "classnames";
import css from "./TimePicker.module.scss";

export interface TimePickerProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const TimePicker = React.forwardRef<HTMLDivElement, TimePickerProps>(
  (props: TimePickerProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.TimePicker)} ref={ref}>
        <p>TimePicker component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

TimePicker.displayName = "TimePicker";
