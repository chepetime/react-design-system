import * as React from "react";
import classnames from "classnames";
import css from "./ScatterChart.module.scss";

export interface ScatterChartProps {
  children?: React.ReactNode;
}

export const ScatterChart = React.forwardRef<HTMLDivElement, ScatterChartProps>(
  (props: ScatterChartProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.ScatterChart)} ref={ref}>
        <p>ScatterChart component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

ScatterChart.displayName = "ScatterChart";
