import * as React from "react";
import classnames from "classnames";
import css from "./LineChart.module.scss";

export interface LineChartProps {
  children?: React.ReactNode;
}

export function LineChart(props: LineChartProps) {
  return (
    <div {...props} className={classnames(css.LineChart)}>
      <p>LineChart component working!</p>
      <div>{props.children}</div>
    </div>
  );
}

LineChart.displayName = "LineChart";
