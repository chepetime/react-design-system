import React from "react";
import classnames from "classnames";
import css from "./Tooltip.module.scss";

export interface TooltipProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (props: TooltipProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Tooltip)} ref={ref}>
        <p>Tooltip component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Tooltip.displayName = "Tooltip";
