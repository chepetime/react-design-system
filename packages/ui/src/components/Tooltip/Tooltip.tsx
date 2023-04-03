import * as React from "react";
import { useState } from "react";
import classnames from "classnames";
import css from "./Tooltip.module.scss";

export interface TooltipProps {
  children?: React.ReactNode;
  content?: React.ReactNode;
  direction?: "" | "top" | "bottom" | "left" | "right";
  delay?: number;
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (
    { direction = "top", delay = 400, ...props }: TooltipProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    let timeout: NodeJS.Timeout | undefined;
    const [active, setActive] = useState(false);

    const showTip = () => {
      timeout = setTimeout(() => {
        setActive(true);
      }, delay);
    };

    const hideTip = () => {
      clearInterval(timeout);
      setActive(false);
    };

    return (
      <div
        className={classnames(css.Tooltip)}
        ref={ref}
        onMouseEnter={showTip}
        onMouseLeave={hideTip}
      >
        {props.children}
        {active && (
          <div className={classnames(css["Tooltip-Tip"], css[direction])}>
            {props.content}
          </div>
        )}
      </div>
    );
  }
);

Tooltip.displayName = "Tooltip";
