import * as React from "react";
import classnames from "classnames";
import css from "./DonutChart.module.scss";

export interface DonutChartProps {
  children?: React.ReactNode;
}

export function DonutChart(props: DonutChartProps) {
  return (
    <div className={classnames(css.DonutChart)}>
      <p>DonutChart component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

DonutChart.displayName = "DonutChart";
