import React from "react";
import classnames from "classnames";
import css from "./RadioGroup.module.scss";

export interface RadioGroupProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (props: RadioGroupProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.RadioGroup)} ref={ref}>
        <p>RadioGroup component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

RadioGroup.displayName = "RadioGroup";
