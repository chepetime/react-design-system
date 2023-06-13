import React from "react";
import classnames from "classnames";
import css from "./AspectRatio.module.scss";

export interface AspectRatioProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
  (props: AspectRatioProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.AspectRatio)} ref={ref}>
        <p>AspectRatio component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

AspectRatio.displayName = "AspectRatio";
