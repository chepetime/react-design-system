import React from "react";
import classnames from "classnames";
import css from "./InputRangeSlider.module.scss";

/**
 * Props for the InputRangeSlider component
 * Extends React.ComponentPropsWithRef<"input"> to include all the standard input props
 */
export interface InputRangeSliderProps
  extends React.ComponentPropsWithRef<"input"> {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * A functional React component for a range slider input
 */
export const InputRangeSlider = React.forwardRef<
  HTMLInputElement,
  InputRangeSliderProps
>(({ min = 0, max = 100, step = 1, onChange, ...props }, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className={classnames(css.InputRangeSlider)}
      type="range"
      min={min}
      max={max}
      step={step}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChange && onChange(e)
      }
    />
  );
});

InputRangeSlider.displayName = "InputRangeSlider";
