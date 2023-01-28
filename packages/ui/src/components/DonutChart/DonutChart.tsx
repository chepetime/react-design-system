import * as React from "react";
import classnames from "classnames";
import css from "./DonutChart.module.scss";

export interface DonutChartProps {
  children?: React.ReactNode;
}

export const DonutChart = React.forwardRef<HTMLDivElement, DonutChartProps>(
  (props: DonutChartProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.DonutChart)} ref={ref}>
        <p>DonutChart component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

DonutChart.displayName = "DonutChart";
