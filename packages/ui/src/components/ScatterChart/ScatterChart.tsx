import * as React from "react";
import classnames from "classnames";
import css from "./ScatterChart.module.scss";

export interface ScatterChartProps {
  children?: React.ReactNode;
}

export function ScatterChart(props: ScatterChartProps) {
  return (
    <div {...props} className={classnames(css.ScatterChart)}>
      <p>ScatterChart component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

ScatterChart.displayName = "ScatterChart";
