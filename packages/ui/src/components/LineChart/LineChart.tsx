import * as React from "react";
import classnames from "classnames";
import css from "./LineChart.module.scss";

export interface LineChartProps {
  children?: React.ReactNode;
}

export const LineChart = React.forwardRef<HTMLDivElement, LineChartProps>(
  (props: LineChartProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.LineChart)} ref={ref}>
        <p>LineChart component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

LineChart.displayName = "LineChart";
