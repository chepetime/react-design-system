import * as React from "react";
import classnames from "classnames";
import css from "./BarChart.module.scss";

export interface BarChartProps {
  children?: React.ReactNode;
}

export const BarChart = React.forwardRef<HTMLDivElement, BarChartProps>(
  (props: BarChartProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.BarChart)} ref={ref}>
        <p>BarChart component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

BarChart.displayName = "BarChart";
