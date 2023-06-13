import React from "react";
import classnames from "classnames";
import css from "./Slider.module.scss";

export interface SliderProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  (props: SliderProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Slider)} ref={ref}>
        <p>Slider component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Slider.displayName = "Slider";
