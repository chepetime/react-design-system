import React from "react";
import classnames from "classnames";
import css from "./Calendar.module.scss";

export interface CalendarProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(
  (props: CalendarProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Calendar)} ref={ref}>
        <p>Calendar component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Calendar.displayName = "Calendar";
