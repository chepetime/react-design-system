import * as React from "react";
import classnames from "classnames";
import css from "./BarChart.module.scss";

export interface BarChartProps {
  children?: React.ReactNode;
}

export function BarChart(props: BarChartProps) {
  return (
    <div {...props} className={classnames(css.BarChart)}>
      <p>BarChart component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

BarChart.displayName = "BarChart";
