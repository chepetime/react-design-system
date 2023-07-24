import React from "react";
import classnames from "classnames";
import css from "./Radio.module.scss";

export interface RadioProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

export const Radio = React.forwardRef<HTMLDivElement, RadioProps>(
  (props: RadioProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div className={classnames(css.Radio)} ref={ref}>
        <p>Radio component working!</p>
        <div>{props.children}</div>
      </div>
    );
  }
)

Radio.displayName = "Radio";
